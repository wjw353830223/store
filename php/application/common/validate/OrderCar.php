<?php

namespace app\common\validate;
use think\Validate;
/**
* 设置模型
*/
class OrderCar extends Validate{

	protected $rule = array(
		'name'  		=> 'require',
        'price'         => 'require|number|egt:100',
        'nums'     => 'number|egt:0',
        'menu_id'   => 'require'
	);
	protected $message = array(
		'name.require'    	=> '菜品名称必须填写',
        'price.require'    	=> '价格必须填写',
        'price.number'    	=> '价格必须为数字,以分为单位',
        'price.egt'    	=> '价格必须为数字,且大于100,以分为单位',
        'nums.egt'    	=> '销量必须是大于等于0的整数',
        'menu_id.require'    	=> '请选择菜单'
	);
}