<?php
/**
 * @copyright   Copyright (c) http://careyshop.cn All rights reserved.
 *
 * CareyShop    账号管理验证器
 *
 * @author      zxm <252404501@qq.com>
 * @date        2017/3/31
 */

namespace app\careyshop\validate;

class User extends CareyShop
{
    /**
     * 验证规则
     * @var string[]
     */
    protected $rule = [
        'client_id'     => 'integer|gt:0',
        'username'      => 'require|alphaDash|length:4,20|unique:user,username,0,user_id',
        'password'      => 'require|min:6|confirm',
        'code'          => 'max:6',
        'mobile'        => 'number|length:7,15|unique:user,mobile,0,user_id',
        'email'         => 'email|max:60|unique:user,email,0,user_id',
        'nickname'      => 'max:50',
        'head_pic'      => 'max:512',
        'sex'           => 'in:0,1,2',
        'birthday'      => 'date|dateFormat:Y-m-d',
        'user_level_id' => 'integer|gt:0',
        'group_id'      => 'integer|gt:0',
        'status'        => 'in:0,1',
        'password_old'  => 'min:6',
        'refresh'       => 'max:32',
        'account'       => 'max:80',
        'platform'      => 'max:50',
        'page_no'       => 'integer|egt:0',
        'page_size'     => 'integer|egt:0',
        'order_type'    => 'requireWith:order_field|in:asc,desc',
        'order_field'   => 'requireWith:order_type|in:user_id,username,group_id,mobile,nickname,sex,birthday,user_level_id,status,create_time',
    ];

    /**
     * 字段描述
     * @var string[]
     */
    protected $field = [
        'client_id'     => '账号编号',
        'username'      => '账号',
        'password'      => '密码',
        'code'          => '验证码',
        'mobile'        => '手机号码',
        'email'         => '邮箱地址',
        'nickname'      => '昵称',
        'head_pic'      => '头像',
        'sex'           => '性别',
        'birthday'      => '生日',
        'user_level_id' => '会员等级',
        'group_id'      => '所属用户组',
        'status'        => '账号状态',
        'password_old'  => '原始密码',
        'last_login'    => '登录日期',
        'account'       => '账号或手机号码',
        'platform'      => '来源终端',
        'page_no'       => '页码',
        'page_size'     => '每页数量',
        'order_type'    => '排序方式',
        'order_field'   => '排序字段',
    ];

    /**
     * 场景规则
     * @var string[]
     */
    protected $scene = [
        'set'     => [
            'client_id' => 'require|integer|gt:0',
            'password'  => 'min:6',
            'nickname'  => 'max:50',
            'head_pic',
            'sex',
            'birthday',
            'group_id',
            'status',
        ],
        'status'  => [
            'client_id' => 'require|arrayHasOnlyInts',
            'status'    => 'require|in:0,1',
        ],
        'change'  => [
            'client_id' => 'require|integer|gt:0',
            'password',
            'password_old',
        ],
        'del'     => [
            'client_id' => 'require|arrayHasOnlyInts',
        ],
        'item'    => [
            'client_id' => 'require|integer|gt:0',
        ],
        'login'   => [
            'username' => 'require|alphaDash|length:4,20',
            'password' => 'min:6',
            'platform' => 'require|max:50',
        ],
        'refresh' => [
            'refresh' => 'require|max:32',
        ],
        'list'    => [
            'client_id' => 'arrayHasOnlyInts',
            'user_level_id',
            'group_id',
            'account',
            'status',
            'page_no',
            'page_size',
            'order_type',
            'order_field',
        ],
        'select'  => [
            'client_id' => 'require|arrayHasOnlyInts',
        ],
        'find'    => [
            'code'     => 'require|max:6',
            'username' => 'require|alphaDash|length:4,20',
            'mobile'   => 'requireWithout:email|number|length:7,15',
            'email'    => 'requireWithout:mobile|email|max:60',
            'password',
        ],
        'bind'    => [
            'code'   => 'require|max:6',
            'mobile' => 'requireWithout:email|number|length:7,15',
            'email'  => 'requireWithout:mobile|email|max:60',
        ],
    ];
}
