<?php
/**
 * @copyright   Copyright (c) http://careyshop.cn All rights reserved.
 *
 * CareyShop    操作日志模型
 *
 * @author      zxm <252404501@qq.com>
 * @date        2020/10/14
 */

namespace app\careyshop\model;

use careyshop\Ip2Region;
use think\facade\Cache;

class ActionLog extends CareyShop
{
    /**
     * 主键
     * @var array|string
     */
    protected $pk = 'action_log_id';

    /**
     * 是否需要自动写入时间戳
     * @var bool|string
     */
    protected $autoWriteTimestamp = true;

    /**
     * 更新日期字段
     * @var bool|string
     */
    protected $updateTime = false;

    /**
     * 只读属性
     * @var string[]
     */
    protected $readonly = [
        'action_log_id',
        'create_time',
    ];

    /**
     * 字段类型或者格式转换
     * @var string[]
     */
    protected $type = [
        'action_log_id' => 'integer',
        'client_type'   => 'integer',
        'user_id'       => 'integer',
        'header'        => 'json',
        'params'        => 'json',
        'result'        => 'json',
        'status'        => 'integer',
    ];

    /**
     * 敏感词过滤字段
     * @var string[]
     */
    protected array $safety = [
        'password',
        'password_confirm',
        'app_id',
        'appkey',
        'app_key',
        'app_secret',
        'secret',
        'give_code',
        'exchange_code',
        'setting',
        'value',
        'token',
        'token_expires',
        'refresh',
        'refresh_expires',
        'source_no',
        'tel',
        'mobile',
        'email',
        'account',
        'aes_key',
        'auth_app_id',
        'seller_id',
    ];

    /**
     * 设置菜单操作动作
     * @access private
     * @param string      $key   来源值
     * @param string|null $value 修改值
     * @throws
     */
    private function setMenuMap(string $key, ?string &$value)
    {
        static $menuMap = null;
        if (empty($menuMap)) {
            $menuMap = Cache::remember('menuOfActionLog', function () {
                $menuList = Menu::getMenuListData('api');
                Cache::tag('CommonAuth')->append('menuOfActionLog');

                return array_column($menuList, 'name', 'url');
            });
        }

        if (array_key_exists($key, $menuMap)) {
            $value = $menuMap[$key];
            return;
        }

        $value = '未知操作';
    }

    /**
     * 获取器IP地址
     * @access public
     * @param $value
     * @param $data
     * @return string
     * @throws
     */
    public function getIpRegionAttr($value, $data): string
    {
        if (empty($data['ip'])) {
            return '';
        }

        $ip2region = new Ip2Region();
        $result = $ip2region->btreeSearch($data['ip']);

        return $result ? get_ip2region_str($result['region']) : $value;
    }

    /**
     * 获取器设置日志操作动作
     * @access public
     * @param $value
     * @param $data
     * @return mixed
     */
    public function getActionAttr($value, $data)
    {
        $this->setMenuMap($data['path'], $value);
        return $value;
    }

    /**
     * 获取器设置请求参数
     * @access public
     * @param $value
     * @return mixed
     */
    public function getParamsAttr($value)
    {
        if (is_string($value)) {
            $value = json_decode($value, true);
        }

        if (is_array($value)) {
            $this->privacyField($value);
        }

        return $value;
    }

    /**
     * 获取器设置处理结果
     * @access public
     * @param $result
     * @return mixed
     */
    public function getResultAttr($result)
    {
        if (is_string($result)) {
            $result = json_decode($result, true);
        }

        if (is_array($result)) {
            $this->privacyField($result);
        }

        return $result;
    }

    /**
     * 对过敏字段进行隐私保护
     * @access private
     * @param array $arr 原始数组
     */
    private function privacyField(array &$arr)
    {
        foreach ($arr as $key => $val) {
            if (is_array($val)) {
                $this->privacyField($arr[$key]);
            } else if (in_array($key, $this->safety, true)) {
                $arr[$key] = auto_hid_substr($val);
            }
        }
    }

    /**
     * 获取一条操作日志
     * @access public
     * @param array $data 外部数据
     * @return array|false
     */
    public function getActionLogItem(array $data)
    {
        if (!$this->validateData($data, 'item')) {
            return false;
        }

        return $this->findOrEmpty($data['action_log_id'])
            ->append(['action', 'ip_region'])
            ->toArray();
    }

    /**
     * 获取操作日志列表
     * @access public
     * @param array $data 外部数据
     * @return array|false
     * @throws
     */
    public function getActionLogList(array $data)
    {
        if (!$this->validateData($data)) {
            return false;
        }

        // 筛选条件
        $map = [];
        is_empty_parm($data['client_type']) ?: $map[] = ['client_type', '=', $data['client_type']];
        empty($data['username']) ?: $map[] = ['username', '=', $data['username']];
        empty($data['path']) ?: $map[] = ['path', '=', $data['path']];
        is_empty_parm($data['status']) ?: $map[] = ['status', '=', $data['status']];

        if (!empty($data['begin_time']) && !empty($data['end_time'])) {
            $map[] = ['create_time', 'between time', [$data['begin_time'], $data['end_time']]];
        }

        $result['total_result'] = $this->where($map)->count();
        if ($result['total_result'] <= 0) {
            return $result;
        }

        // 实际查询
        $result['items'] = $this->setDefaultOrder(['action_log_id' => 'desc'])
            ->where($map)
            ->withSearch(['page', 'order'], $data)
            ->select()
            ->append(['action', 'ip_region'])
            ->toArray();

        return $result;
    }
}
