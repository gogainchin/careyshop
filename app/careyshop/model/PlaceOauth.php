<?php
/**
 * @copyright   Copyright (c) http://careyshop.cn All rights reserved.
 *
 * CareyShop    OAuth2.0模型
 *
 * @author      zxm <252404501@qq.com>
 * @date        2021/3/26
 */

namespace app\careyshop\model;

use think\facade\Cache;
use think\facade\Route;

class PlaceOauth extends CareyShop
{
    /**
     * 主键
     * @var array|string
     */
    protected $pk = 'place_oauth_id';

    /**
     * 只读属性
     * @var mixed|string[]
     */
    protected $readonly = [
        'place_oauth_id',
        'place_id',
    ];

    /**
     * 字段类型或者格式转换
     * @var mixed|string[]
     */
    protected $type = [
        'place_oauth_id' => 'integer',
        'place_id'       => 'integer',
        'status'         => 'integer',
    ];

    /**
     * 添加一条授权机制
     * @access public
     * @param array $data 外部数据
     * @return array|false
     */
    public function addPlaceOAuthItem(array $data)
    {
        if (!$this->validateData($data)) {
            return false;
        }

        // 避免无关字段
        unset($data['place_oauth_id']);

        if ($this->save($data)) {
            Cache::tag('oauth')->clear();
            return $this->toArray();
        }

        return false;
    }

    /**
     * 编辑一条授权机制
     * @access public
     * @param array $data 外部数据
     * @return array|false
     */
    public function setPlaceOAuthItem(array $data)
    {
        if (!$this->validateData($data, 'set')) {
            return false;
        }

        $map[] = ['place_oauth_id', '=', $data['place_oauth_id']];
        $result = self::update($data, $map);
        Cache::tag('oauth')->clear();

        return $result->toArray();
    }

    /**
     * 批量删除授权机制
     * @access public
     * @param array $data 外部数据
     * @return bool
     */
    public function delPlaceOAuthList(array $data): bool
    {
        if (!$this->validateData($data, 'del')) {
            return false;
        }

        self::destroy($data['place_oauth_id']);
        Cache::tag('oauth')->clear();

        return true;
    }

    /**
     * 获取一条授权机制
     * @access public
     * @param array $data 外部数据
     * @return array|false
     */
    public function getPlaceOAuthItem(array $data)
    {
        if (!$this->validateData($data, 'item')) {
            return false;
        }

        return $this->findOrEmpty($data['place_oauth_id'])->toArray();
    }

    /**
     * 获取授权机制列表
     * @access public
     * @param array $data 外部数据
     * @return array|false
     * @throws
     */
    public function getPlaceOAuthList(array $data)
    {
        if (!$this->validateData($data, 'list')) {
            return false;
        }

        // 搜索条件
        $map = [];
        empty($data['name']) ?: $map[] = ['name', 'like', '%' . $data['name'] . '%'];
        $map[] = ['place_id', '=', $data['place_id']];
        is_empty_parm($data['status']) ?: $map[] = ['status', '=', $data['status']];

        return $this->where($map)->select()->toArray();
    }

    /**
     * 批量设置机制状态
     * @access public
     * @param array $data 外部数据
     * @return bool
     */
    public function setPlaceOAuthStatus(array $data): bool
    {
        if (!$this->validateData($data, 'status')) {
            return false;
        }

        $map[] = ['place_oauth_id', 'in', $data['place_oauth_id']];
        self::update(['status' => $data['status']], $map);
        Cache::tag('oauth')->clear();

        return true;
    }

    /**
     * 获取某个模块下的配置参数
     * @access private
     * @param $id
     * @return array|false
     * @throws
     */
    private function getOAuthConfig($id)
    {
        $map[] = ['place_oauth_id', '=', $id];
        $result = $this->where($map)->field('model,client_id,client_secret,config,expand')->find();

        if (is_null($result)) {
            return $this->setError('OAuth模型不存在或已停用');
        }

        // 提取配置并尝试合并扩展配置
        $config = @json_decode($result->getAttr('config'), true);
        $expand = @json_decode($result->getAttr('expand'), true);
        $basics = $result->hidden(['model', 'expand', 'config'])->toArray();

        if (is_array($expand)) {
            $basics = array_merge($expand, $basics);
        }

        // 配置回调地址
        $vars = ['method' => 'callback', 'place_oauth_id' => $id];
        $basics['redirect'] = Route::buildUrl("api/{$this->version}/place_oauth", $vars)->domain(true)->build();

        return [
            'basics' => $basics,
            'config' => $config,
            'model'  => $result->getAttr('model'),
        ];
    }

    /**
     * OAuth2.0授权准备
     * @access public
     * @param array $data 外部数据
     * @return false|string
     */
    public function authorizeOAuth(array $data)
    {
        if (!$this->validateData($data, 'authorize')) {
            return false;
        }

        $config = $this->getOAuthConfig($data['place_oauth_id']);
        if (!$config) {
            return false;
        }

        $service = new \app\careyshop\service\PlaceOauth($config);
        $result = $service->getAuthorizeRedirect();

        return false === $result ? $service->getError() : $result;
    }

    public function callbackOAuth(array $data)
    {
    }
}
