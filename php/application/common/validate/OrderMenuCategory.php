<?php

namespace app\common\validate;
use think\Validate;
/**
* 设置模型
*/
class OrderMenuCategory extends Validate{

	protected $rule = array(
		'name'  		=> 'require|length:2,12'
	);
	protected $message = array(
		'name.require'    	=> '分类名必须填写',
		'name.length'    	=> '分类名长度在6到12个字符'
	);
}