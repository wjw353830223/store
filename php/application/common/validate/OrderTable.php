<?php

namespace app\common\validate;
use think\Validate;
/**
* 设置模型
*/
class OrderTable extends Validate{

	protected $rule = array(
		'name'  		=> 'require|length:2,12',
		'seats'      	=> 'require|<=:12',
	);
	protected $message = array(
		'name.require'    	=> '餐桌编号必须填写',
		'name.length'    	=> '餐桌编号长度在6到12个字符',
		'seats.require'    	=> '座位数量必须填写',
        'seats.elt'    	=> '座位数不能超过12',
	);
}