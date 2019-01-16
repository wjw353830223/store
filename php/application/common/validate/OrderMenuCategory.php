<?php

namespace app\common\validate;
use think\Validate;
/**
* 设置模型
*/
class OrderMenuCategory extends Validate{

	protected $rule = array(
		'name'  		=> 'require'
	);
	protected $message = array(
		'name.require'    	=> '分类名必须填写',
	);
}