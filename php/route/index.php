<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

Route::post('index/open/login','index/open/login');

Route::get('index/position/index','index/position/index');

Route::get('index/menus/index','index/menus/index');
Route::get('index/menus/read','index/menus/read');

Route::get('index/category/index','index/category/index');
Route::get('index/category/read','index/category/read');

Route::Post('index/member/bind','index/member/bind');

Route::resource('index/car','index/car');
Route::post('index/car/deletes','index/car/deletes');
Route::post('index/car/enables','index/car/enables');
return [

];
