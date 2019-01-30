<?php

namespace app\common\validate;
use think\Validate;
/**
* 设置模型
*/
class OrderAds extends Validate{

	protected $rule = array(
		'title'  		=> 'require',
		'pid'      	=> 'require',
	);
	protected $message = array(
		'title.require'    	=> '广告名称必须填写',
		'pid.require'    	=> '必须选择广告位',
	);
}