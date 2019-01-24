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
Route::resource('order/tables','order/tables');
Route::resource('order/category','order/category');
Route::resource('order/menus','order/menus');


Route::post('order/tables/deletes','order/tables/deletes');
Route::post('order/tables/enables','order/tables/enables');
Route::get('order/tables/qrcode','order/tables/qrcode');

Route::post('order/category/deletes','order/category/deletes');
Route::post('order/category/enables','order/category/enables');

Route::post('order/menus/deletes','order/menus/deletes');
Route::post('order/menus/enables','order/menus/enables');
Route::post('order/menus/upload','order/menus/upload');
Route::post('order/menus/detailFiles','order/menus/uploadDetailFiles');
return [

];
