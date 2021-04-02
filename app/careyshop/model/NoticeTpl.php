<?php
/**
 * @copyright   Copyright (c) http://careyshop.cn All rights reserved.
 *
 * CareyShop    通知系统模板模型
 *
 * @author      zxm <252404501@qq.com>
 * @date        2020/8/28
 */

namespace app\careyshop\model;

use app\careyshop\service\Notice;
use PHPMailer\PHPMailer\PHPMailer;
use think\facade\Cache;
use think\facade\Config;
use aliyun\SendSmsRequest;
use aliyun\core\Config as AliyunConfig;
use aliyun\core\profile\DefaultProfile;
use aliyun\core\DefaultAcsClient;

class NoticeTpl extends CareyShop
{
    /**
     * 主配置参数
     * @var array
     */
    private array $setting;

    /**
     * 当前通知类型短信模板参数
     * @var array
     */
    private array $smsSetting;

    /**
     * 当前通知类型邮箱模板参数
     * @var array
     */
    private array $emailSetting;

    /**
     * 可用变量
     * @var array
     */
    private array $noticeItem;

    /**
     * 主键
     * @var array|string
     */
    protected $pk = 'notice_tpl_id';

    /**
     * 只读属性
     * @var mixed|string[]
     */
    protected $readonly = [
        'notice_tpl_id',
        'name',
        'code',
        'type',
    ];

    /**
     * 字段类型或者格式转换
     * @var mixed|string[]
     */
    protected $type = [
        'notice_tpl_id' => 'integer',
        'type'          => 'integer',
        'status'        => 'integer',
    ];

    /**
     * hasMany cs_notice_item
     * @access public
     * @return mixed
     */
    public function getNoticeItem()
    {
        return $this->hasMany(NoticeItem::class, 'type', 'type');
    }

    /**
     * 获取通知系统模板列表(不包括关联数据,不对外,模型内部调用)
     * @access public
     * @param int  $type 通知类型
     * @param null $code 通知编码
     * @return array
     * @throws
     */
    public function getNoticeTplData(int $type, $code = null): array
    {
        $map[] = ['type', '=', $type];
        !isset($code) ?: $map[] = ['code', '=', $code];

        return $this->cache(true, null, 'NoticeTpl')
            ->where($map)
            ->select()
            ->toArray();
    }

    /**
     * 获取一个通知系统模板
     * @access public
     * @param array $data 外部数据
     * @return array|false
     */
    public function getNoticeTplItem(array $data)
    {
        if (!$this->validateData($data, 'item')) {
            return false;
        }

        // 搜索条件
        $map[] = ['notice_tpl_id', '=', $data['notice_tpl_id']];

        // 关联查询
        $with['get_notice_item'] = function ($query) {
            $query->cache(true, null, 'NoticeTpl');
        };

        // 获取数据
        return $this->cache(true, null, 'NoticeTpl')
            ->with($with)
            ->where($map)
            ->findOrEmpty()
            ->toArray();
    }

    /**
     * 获取通知系统模板列表
     * @access public
     * @param array $data 外部数据
     * @return array|false
     * @throws
     */
    public function getNoticeTplList(array $data)
    {
        if (!$this->validateData($data, 'list')) {
            return false;
        }

        // 搜索条件
        $map = [];
        !isset($data['code']) ?: $map[] = ['code', '=', $data['code']];

        return $this->with('get_notice_item')
            ->where($map)
            ->select()
            ->toArray();
    }

    /**
     * 编辑一个通知系统模板
     * @access public
     * @param array $data 外部数据
     * @return array|false
     * @throws
     */
    public function setNoticeTplItem(array $data)
    {
        if (!$this->validateData($data, 'item')) {
            return false;
        }

        $result = $this->find($data['notice_tpl_id']);
        if (is_null($result)) {
            return $this->setError('数据不存在');
        }

        // 再次验证数据是否规范
        $code = $result->getAttr('code');
        if (!$this->validateData($data, 'set_' . $code)) {
            return false;
        }

        if ('sms' === $code) {
            $data['title'] = $data['sms_sign'];
            unset($data['sms_sign']);
        }

        if ($result->save($data)) {
            Cache::tag('NoticeTpl')->clear();
            return $result->toArray();
        }

        return false;
    }

    /**
     * 批量设置通知系统模板是否启用
     * @access public
     * @param array $data 外部数据
     * @return bool
     */
    public function setNoticeTplStatus(array $data): bool
    {
        if (!$this->validateData($data, 'status')) {
            return false;
        }

        $map[] = ['notice_tpl_id', 'in', $data['notice_tpl_id']];
        self::update(['status' => $data['status']], $map);
        Cache::tag('NoticeTpl')->clear();

        return true;
    }

    /**
     * 发送通知
     * @access public
     * @param string $mobile 手机号
     * @param string $email  邮箱地址
     * @param int    $type   通知类型
     * @param null   $code   通知编码 sms或email(为空则根据设置判断,否则为指定发送)
     * @param array  $data   发送数据(如订单号则需要从外部传入,而验证码就不需要)
     * @return bool
     */
    public function sendNotice(string $mobile, string $email, int $type, $code = null, $data = []): bool
    {
        if (empty($mobile) && empty($email)) {
            return $this->setError('手机号或邮箱地址不能为空');
        }

        // 获取主配置参数
        $isSmsClose = $isEmailClose = false;
        $this->setting = Notice::getNoticeList();

        if (empty($this->setting['sms']['status']['value'])) {
            $isSmsClose = true;
        }

        if (empty($this->setting['email']['status']['value'])) {
            $isEmailClose = true;
        }

        // 判断主配置是否启用
        if ($isSmsClose && $isEmailClose) {
            return $this->setError('通知系统已全部禁用');
        }

        if (!is_null($code)) {
            if ($isSmsClose && 'sms' == $code) {
                return $this->setError('通知系统短信已禁用');
            }

            if ($isEmailClose && 'email' == $code) {
                return $this->setError('通知系统邮箱已禁用');
            }
        }

        // 获取通知系统模板数据
        $tplResult = $this->getNoticeTplData($type, $code);
        foreach ($tplResult as $value) {
            if ('sms' == $value['code'] && !$isSmsClose) {
                $this->smsSetting = $value;
                continue;
            }

            if ('email' == $value['code'] && !$isEmailClose) {
                $this->emailSetting = $value;
                $this->emailSetting['template'] = htmlspecialchars_decode($value['template']);
                continue;
            }
        }

        // 指定编码时判断模板是否存在
        if (!is_null($code)) {
            if ('sms' == $code && !isset($this->smsSetting)) {
                return $this->setError('通知系统短信模板配置不存在');
            }

            if ('email' == $code && !isset($this->emailSetting)) {
                return $this->setError('通知系统邮箱模板配置不存在');
            }
        }

        // 指定通知编码时判断模板是否启用
        if (!is_null($code) && isset($this->smsSetting) && 0 == $this->smsSetting['status']) {
            return $this->setError('通知系统短信(' . $this->smsSetting['name'] . ')模板已禁用');
        }

        if (!is_null($code) && isset($this->emailSetting) && 0 == $this->emailSetting['status']) {
            return $this->setError('通知系统邮箱(' . $this->emailSetting['name'] . ')模板已禁用');
        }

        // 根据通知类型获取可用变量(缓存)
        $error = '';
        $this->noticeItem = NoticeItem::cache()
            ->where('type', '=', $type)
            ->column('replace_name', 'item_name');

        if (!empty($mobile) && !$isSmsClose && isset($this->smsSetting) && 1 == $this->smsSetting['status']) {
            if (!$this->snedNoticeSms($mobile, $data)) {
                $error .= $this->getError();
            }
        }

        if (!empty($email) && !$isEmailClose && isset($this->emailSetting) && 1 == $this->emailSetting['status']) {
            if (!$this->snedNoticeEmail($email, $this->emailSetting['title'], $data)) {
                $error .= $this->getError();
            }
        }

        return empty($error) ? true : $this->setError($error);
    }

    /**
     * 模板转实际发送数据
     * @access private
     * @param string $code 通知编码
     * @param array  $data 内部提交数据
     * @return false|mixed|string|string[]
     */
    private function templateToSendContent(string $code, array $data)
    {
        $realValue = function ($item_name) use ($data) {
            $value = '';
            switch ($item_name) {
                case '{验证码}':
                    !isset($data['number']) ?: $value = $data['number'];
                    break;

                case '{商城名称}':
                    $value = Config::get('careyshop.system_info.name', '');
                    break;

                case '{用户账号}':
                    !isset($data['user_name']) ?: $value = auto_hid_substr($data['user_name']);
                    break;

                case '{用户昵称}':
                    !isset($data['nick_name']) ?: $value = auto_hid_substr($data['nick_name']);
                    break;

                case '{充值金额}':
                    !isset($data['recharge_money']) ?: $value = $data['recharge_money'];
                    break;

                case '{主订单号}':
                    !isset($data['order_no']) ?: $value = $data['order_no'];
                    break;

                case '{订单金额}':
                    !isset($data['order_money']) ?: $value = $data['order_money'];
                    break;

                case '{商品金额}':
                    !isset($data['goods_money']) ?: $value = $data['goods_money'];
                    break;

                case '{商品名称}':
                    !isset($data['goods_name']) ?: $value = $data['goods_name'];
                    break;

                case '{快递公司}':
                    !isset($data['delivery_name']) ?: $value = $data['delivery_name'];
                    break;

                case '{快递单号}':
                    !isset($data['logistic_code']) ?: $value = $data['logistic_code'];
                    break;

                default:
                    $value = '';
            }

            return $value;
        };

        // 填充可用变量实际内容
        $noticeItem = [];
        foreach ($this->noticeItem as $key => $value) {
            $noticeItem[$value] = $realValue($key);
        }

        // 从模板中获取需要替换的变量
        $replaceItem = [];
        $template = 'sms' == $code ? $this->smsSetting['template'] : $this->emailSetting['template'];

        if (false === preg_match_all('/{([^}]+)}/', $template, $replaceItem)) {
            return false;
        }

        $result = '';
        if (!empty($replaceItem[0])) {
            if ('sms' == $code) {
                $smsData = [];
                foreach ($replaceItem[0] as $value) {
                    if (isset($this->noticeItem[$value])) {
                        $smsData[$this->noticeItem[$value]] = $noticeItem[$this->noticeItem[$value]];
                    }
                }

                $result = json_encode($smsData, JSON_UNESCAPED_UNICODE);
            }

            if ('email' == $code) {
                $emailData = $template;
                foreach ($replaceItem[0] as $value) {
                    if (isset($this->noticeItem[$value])) {
                        $emailData = str_replace($value, $noticeItem[$this->noticeItem[$value]], $emailData);
                    }
                }

                $result = $emailData;
            }
        }

        return $result;
    }

    /**
     * 发送手机短信
     * @access private
     * @param string $mobile 手机号
     * @param array  $data   发送数据
     * @return bool
     */
    private function snedNoticeSms(string $mobile, array $data): bool
    {
        // 加载区域结点配置
        AliyunConfig::load();

        // 短信API产品名
        $product = 'Dysmsapi';

        // 短信API产品域名
        $domain = 'dysmsapi.aliyuncs.com';

        // 暂时不支持多Region
        $region = 'cn-hangzhou';

        // 服务结点
        $endPointName = 'cn-hangzhou';

        // AccessKeyId
        $keyId = $this->setting['sms']['key_id']['value'];

        // AccessKeySecret
        $keySecret = $this->setting['sms']['key_secret']['value'];

        // 初始化用户Profile实例
        $profile = DefaultProfile::getProfile($region, $keyId, $keySecret);

        // 增加服务结点
        DefaultProfile::addEndpoint($endPointName, $region, $product, $domain);

        // 初始化SendSmsRequest实例用于设置发送短信的参数
        $request = new SendSmsRequest();

        // 设置短信接收号码
        $request->setPhoneNumbers($mobile);

        // 设置签名名称
        $request->setSignName($this->smsSetting['title']);

        // 设置模板CODE
        $request->setTemplateCode($this->smsSetting['sms_code']);

        // 设置模板参数
        $templateData = $this->templateToSendContent('sms', $data);
        if (!empty($templateData)) {
            $request->setTemplateParam($templateData);
        } else {
            return $this->setError('短信正文不能为空');
        }

        // 发起访问请求
        try {
            $client = new DefaultAcsClient($profile);
            $client->getAcsResponse($request);
        } catch (\exception $e) {
            return $this->setError($e->getMessage());
        }

        return true;
    }

    /**
     * 发送邮件
     * @access private
     * @param string $email      邮箱号码
     * @param string $subject    邮件主题
     * @param array  $data       发送数据
     * @param null   $attachment 附件列表
     * @return bool
     * @throws
     */
    private function snedNoticeEmail(string $email, string $subject, array $data, $attachment = null): bool
    {
        // 实例化PHPMailer对象
        $mail = new PHPMailer();

        // 设置邮件编码
        $mail->CharSet = 'utf-8';

        // 设置邮件语言
        $mail->setLanguage('zh_cn');

        // 设置使用SMTP服务
        $mail->isSMTP();

        // SMTP调试功能 0=关闭 1=错误和消息 2=消息
        $mail->SMTPDebug = 0;

        // 编码格式
        $mail->Encoding = 'base64';

        // 启用SMTP验证功能
        $mail->SMTPAuth = true;

        // 使用安全协议
        $mail->SMTPSecure = $this->setting['email']['email_ssl']['value'] == 0 ? 'tls' : 'ssl';

        // SMTP服务器
        $mail->Host = $this->setting['email']['email_host']['value'];

        // SMTP服务器的端口号
        $mail->Port = $this->setting['email']['email_port']['value'];

        // SMTP服务器用户名
        $mail->Username = $this->setting['email']['email_id']['value'];

        // SMTP服务器密码
        $mail->Password = $this->setting['email']['email_pass']['value'];

        $name = Config::get('careyshop.system_info.name', '');
        $mail->setFrom($this->setting['email']['email_addr']['value'], $name);
        $mail->addReplyTo($this->setting['email']['email_addr']['value'], $name);

        // 设置收件人
        $mail->addAddress($email);

        // 设置邮件内容
        $templateData = $this->templateToSendContent('email', $data);

        if (!empty($templateData)) {
            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body = $templateData;
        } else {
            return $this->setError('邮件正文不能为空');
        }

        // 添加附件
        if (is_array($attachment)) {
            foreach ($attachment as $file) {
                is_file($file) && $mail->addAttachment($file);
            }
        }

        try {
            if ($mail->send()) {
                return true;
            }
        } catch (\Exception $e) {
            return $this->setError($e->getMessage());
        }

        return $this->setError($mail->ErrorInfo);
    }
}
