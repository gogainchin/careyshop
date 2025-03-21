<?php
/**
 * @copyright   Copyright (c) http://careyshop.cn All rights reserved.
 *
 * CareyShop    收藏夹验证器
 *
 * @author      zxm <252404501@qq.com>
 * @date        2017/7/15
 */

namespace app\careyshop\validate;

class Collect extends CareyShop
{
    /**
     * 验证规则
     * @var string[]
     */
    protected $rule = [
        'client_id'   => 'integer|gt:0',
        'collect_id'  => 'integer|gt:0',
        'goods_id'    => 'require|integer|gt:0',
        'is_top'      => 'in:0,1',
        'page_no'     => 'integer|egt:0',
        'page_size'   => 'integer|egt:0',
        'order_type'  => 'requireWith:order_field|in:asc,desc',
        'order_field' => 'requireWith:order_type|in:collect_id,goods_id,create_time',
    ];

    /**
     * 字段描述
     * @var string[]
     */
    protected $field = [
        'client_id'   => '账号编号',
        'collect_id'  => '收藏夹编号',
        'goods_id'    => '商品编号',
        'is_top'      => '是否置顶',
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
        'del'   => [
            'collect_id' => 'require|arrayHasOnlyInts',
        ],
        'top'   => [
            'collect_id' => 'require|arrayHasOnlyInts',
            'is_top'     => 'require|in:0,1',
        ],
        'list'  => [
            'client_id' => 'require|integer|gt:0',
            'page_no',
            'page_size',
            'order_type',
            'order_field',
        ],
        'goods' => [
            'goods_id',
        ],
        'total' => [
            'client_id' => 'require|integer|gt:0',
        ],
    ];
}
