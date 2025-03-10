<?php
/**
 * @copyright   Copyright (c) http://careyshop.cn All rights reserved.
 *
 * CareyShop    应用管理验证器
 *
 * @author      zxm <252404501@qq.com>
 * @date        2017/3/24
 */

namespace app\careyshop\validate;

class App extends CareyShop
{
    /**
     * 验证规则
     * @var string[]
     */
    protected $rule = [
        'app_id'     => 'integer|gt:0',
        'app_name'   => 'require|max:30|unique:app,app_name,0,app_id',
        'captcha'    => 'in:0,1',
        'status'     => 'in:0,1',
        'exclude_id' => 'integer|gt:0',
    ];

    /**
     * 字段描述
     * @var string[]
     */
    protected $field = [
        'app_id'     => '应用编号',
        'app_name'   => '应用名称',
        'captcha'    => '应用验证码',
        'status'     => '应用状态',
        'exclude_id' => '应用排除Id',
    ];

    /**
     * 场景规则
     * @var string[]
     */
    protected $scene = [
        'set'     => [
            'app_id'   => 'require|integer|gt:0',
            'app_name' => 'require|max:30',
            'captcha',
            'status',
        ],
        'item'    => [
            'app_id' => 'require|integer|gt:0',
        ],
        'del'     => [
            'app_id' => 'require|arrayHasOnlyInts',
        ],
        'unique'  => [
            'app_name' => 'require|max:30',
            'exclude_id',
        ],
        'replace' => [
            'app_id' => 'require|integer|gt:0',
        ],
        'captcha' => [
            'app_id'  => 'require|arrayHasOnlyInts',
            'captcha' => 'require|in:0,1',
        ],
        'status'  => [
            'app_id' => 'require|arrayHasOnlyInts',
            'status' => 'require|in:0,1',
        ],
        'list'    => [
            'app_name' => 'max:30',
            'status'   => 'in:0,1',
        ],
    ];
}
