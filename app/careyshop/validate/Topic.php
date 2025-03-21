<?php
/**
 * @copyright   Copyright (c) http://careyshop.cn All rights reserved.
 *
 * CareyShop    专题验证器
 *
 * @author      zxm <252404501@qq.com>
 * @date        2017/3/28
 */

namespace app\careyshop\validate;

class Topic extends CareyShop
{
    /**
     * 验证规则
     * @var string[]
     */
    protected $rule = [
        'topic_id'    => 'integer|gt:0',
        'title'       => 'require|max:200',
        'alias'       => 'max:100',
        'content'     => 'require',
        'keywords'    => 'max:255',
        'description' => 'max:255',
        'status'      => 'in:0,1',
        'page_no'     => 'integer|egt:0',
        'page_size'   => 'integer|egt:0',
        'order_type'  => 'requireWith:order_field|in:asc,desc',
        'order_field' => 'requireWith:order_type|in:topic_id,title,alias,status,create_time,update_time',
    ];

    /**
     * 字段描述
     * @var string[]
     */
    protected $field = [
        'topic_id'    => '专题编号',
        'title'       => '专题标题',
        'alias'       => '专题别名',
        'content'     => '专题内容',
        'keywords'    => '专题关键词',
        'description' => '专题描述',
        'status'      => '专题是否显示',
        'page_no'     => '页码',
        'page_size'   => '每页数量',
        'order_type'  => '排序方式',
        'order_field' => '排序字段',
    ];

    /**
     * 场景规则
     * @var string[]
     */
    protected $scene = [
        'set'    => [
            'topic_id' => 'require|integer|gt:0',
            'title',
            'alias',
            'content',
            'keywords',
            'description',
            'status',
        ],
        'del'    => [
            'topic_id' => 'require|arrayHasOnlyInts',
        ],
        'item'   => [
            'topic_id' => 'require|integer|gt:0',
        ],
        'list'   => [
            'title' => 'max:200',
            'alias',
            'keywords',
            'status',
            'page_no',
            'page_size',
            'order_type',
            'order_field',
        ],
        'status' => [
            'topic_id' => 'require|arrayHasOnlyInts',
            'status'   => 'require|in:0,1',
        ],
    ];
}
