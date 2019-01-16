<?php

namespace app\common\validate;
use think\Validate;
/**
* 设置模型
*/
class OrderMenu extends Validate{

	protected $rule = array(
		'name'  		=> 'require',
        'price'         => 'require|number|egt:100',
        'preferential_price'=>'number|egt:100',
        'sale_nums'     => 'number|egt:0',
        'category_id'   => 'require|number'
	);
	protected $message = array(
		'name.require'    	=> '菜品名称必须填写',
        'price.require'    	=> '价格必须填写',
        'price.number'    	=> '价格必须为数字,以分为单位',
        'price.egt'    	=> '价格必须为数字,且大于100,以分为单位',
        'preferential_price.number'    	=> '价格必须为数字,以分为单位',
        'preferential_price.egt'    	=> '价格必须为数字,且大于100,以分为单位',
        'sale_nums.egt'    	=> '销量必须是大于等于0的整数',
        'category_id.require'    	=> '请选择所属的菜品分类',
        'category_id.number'    	=> '请选择正确的的菜品分类',
	);
}