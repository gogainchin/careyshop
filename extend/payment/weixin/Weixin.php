<?php
/**
 * @copyright   Copyright (c) http://careyshop.cn All rights reserved.
 *
 * CareyShop    微信支付
 *
 * @author      zxm <252404501@qq.com>
 * @date        2020/7/23
 */

namespace payment\weixin;

use JsApiPay;
use NativePay;
use payment\Payment;
use think\facade\Request;
use WxPayApi;
use WxPayConfig;
use WxPayUnifiedOrder;

require_once __DIR__ . '/lib/WxPay.Api.php';
require_once __DIR__ . '/example/WxPay.NativePay.php';
require_once __DIR__ . '/example/WxPay.JsApiPay.php';

class Weixin extends Payment
{
    /**
     * 绑定支付的APPID
     * @var string
     */
    protected string $appid;

    /**
     * 商户号
     * @var string
     */
    protected string $mchid;

    /**
     * 商户支付密钥
     * @var string
     */
    protected string $key;

    /**
     * 公众帐号Secert
     * @var string
     */
    private string $appsecret = '';

    /**
     * 请求来源
     * @var mixed
     */
    private $request;

    /**
     * 设置请求来源
     * @access public
     * @param mixed $request 请求来源
     * @return object
     */
    public function setQequest($request): object
    {
        $this->request = $request;
        return $this;
    }

    /**
     * 设置支付配置
     * @access public
     * @param array $setting 配置信息
     * @return bool
     */
    public function setConfig(array $setting): bool
    {
        foreach ($setting as $key => $value) {
            $this->$key = $value['value'];
        }

        if (empty($this->appid) || trim($this->appid) == '') {
            $this->error = '绑定支付的APPID不能为空';
            return false;
        }

        if (empty($this->mchid) || trim($this->mchid) == '') {
            $this->error = '商户号不能为空';
            return false;
        }

        if (empty($this->key) || trim($this->key) == '') {
            $this->error = '商户支付密钥不能为空';
            return false;
        }

        WxPayConfig::$appid = $this->appid;
        WxPayConfig::$mchid = $this->mchid;
        WxPayConfig::$key = $this->key;
        WxPayConfig::$appsecret = $this->appsecret;

        return true;
    }

    /**
     * 格式化参数格式化成url参数
     * @access private
     * @param array $data 参数信息
     * @return string
     */
    private function toUrlParams(array $data): string
    {
        $buff = '';
        foreach ($data as $k => $v) {
            if ($k != 'sign' && $v != '' && !is_array($v)) {
                $buff .= $k . '=' . $v . '&';
            }
        }

        return trim($buff, '&');
    }

    /**
     * 生成签名
     * @access private
     * @param array $data 参数信息
     * @return string
     */
    private function makeSign(array $data): string
    {
        // 签名步骤一：按字典序排序参数
        ksort($data);
        $string = $this->toUrlParams($data);

        // 签名步骤二：在string后加入KEY
        $string = $string . '&key=' . WxPayConfig::$key;

        // 签名步骤三：MD5加密
        $string = md5($string);

        // 签名步骤四：所有字符转为大写
        return strtoupper($string);
    }

    /**
     * 返回支付模块请求结果
     * @access public
     * @return array|false|string
     */
    public function payRequest()
    {
        $result['callback_return_type'] = 'view';
        $result['is_callback'] = [];

        if ($this->request == 'web') {
            if (preg_match('~micromessenger~i', Request::header('user-agent'))) {
                $result['is_callback'] = $this->jsRequestExecute();
            } else {
                $result['is_callback'] = $this->pcRequestExecute();
            }
        } else {
            $result['is_callback'] = $this->appRequestExecute();
        }

        if (false === $result['is_callback']) {
            return false;
        }

        return $this->request == 'web' ? $result : $result['is_callback'];
    }

    /**
     * app查询结果
     * @access private
     * @return array|false
     * @throws
     */
    private function appRequestExecute()
    {
        $input = new WxPayUnifiedOrder();
        $input->SetBody($this->subject);
        $input->SetOut_trade_no($this->outTradeNo);
        $input->SetTotal_fee($this->totalAmount * 100);
        $input->SetNotify_url($this->notifyUrl);
        $input->SetTrade_type('APP');

        // 发送统一下单请求,生成预付款单
        $order = WxPayApi::unifiedOrder($input);

        if ($order['return_code'] != 'SUCCESS') {
            $this->error = $order['return_msg'];
            return false;
        }

        if (!isset($order['prepay_id'])) {
            $this->error = '缺少参数prepay_id';
            return false;
        }

        $result = [
            'appid'     => $order['appid'],
            'partnerid' => $order['mch_id'],
            'prepayid'  => $order['prepay_id'],
            'noncestr'  => WxPayApi::getNonceStr(),
            'timestamp' => time(),
            'package'   => 'Sign=WXPay',
        ];

        $result['sign'] = $this->makeSign($result);
        return $result;
    }

    /**
     * pc查询结果
     * @access private
     * @return false|string
     */
    private function pcRequestExecute()
    {
        $input = new WxPayUnifiedOrder();
        $input->SetBody($this->subject);
        $input->SetOut_trade_no($this->outTradeNo);
        $input->SetTotal_fee($this->totalAmount * 100);
        $input->SetNotify_url($this->notifyUrl);
        $input->SetTrade_type('NATIVE');
        $input->SetProduct_id($this->totalAmount * 100);

        $notify = new NativePay();
        $result = $notify->GetPayUrl($input);

        if ('SUCCESS' !== $result['return_code']) {
            $this->error = $result['return_msg'];
            return false;
        }

        if ('SUCCESS' !== $result['result_code']) {
            $this->error = $result['err_code_des'];
            return false;
        }

        $vars = ['method' => 'get.qrcode.item'];
        $url = url('api/v1/qrcode', $vars, true, true)->build();
        $url .= '?text=' . urlencode($result['code_url']);

        return '<img src="' . $url . '"/>';
    }

    /**
     * js查询结果
     * @access private
     * @return string
     * @throws
     */
    private function jsRequestExecute(): string
    {
        $tools = new JsApiPay();
        $openId = $tools->GetOpenid();

        $input = new WxPayUnifiedOrder();
        $input->SetBody($this->subject);
        $input->SetOut_trade_no($this->outTradeNo);
        $input->SetTotal_fee($this->totalAmount * 100);
        $input->SetNotify_url($this->notifyUrl);
        $input->SetTrade_type("JSAPI");
        $input->SetOpenid($openId);

        $order = WxPayApi::unifiedOrder($input);
        $jsApiParameters = $tools->GetJsApiParameters($order);

        return <<<EOF
	<script type="text/javascript">
	//调用微信JS api 支付
	function jsApiCall()
	{
		WeixinJSBridge.invoke(
			'getBrandWCPayRequest',$jsApiParameters,
			function(res){
				//WeixinJSBridge.log(res.err_msg);
				 if(res.err_msg === "get_brand_wcpay_request:ok") {
				    location.href='/';
				 }else{
				 	//alert(res.err_code+res.err_desc+res.err_msg);
				    location.href='/';
				 }
			}
		)
	}

	function callpay()
	{
		if (typeof WeixinJSBridge == "undefined"){
		    if( document.addEventListener ){
		        document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
		    }else if (document.attachEvent){
		        document.attachEvent('WeixinJSBridgeReady', jsApiCall);
		        document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
		    }
		}else{
		    jsApiCall();
		}
	}
	callpay();
	</script>
EOF;
    }
}
