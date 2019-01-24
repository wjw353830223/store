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

Route::resource('admin/rules','admin/rules');
Route::resource('admin/groups','admin/groups');
Route::resource('admin/users','admin/users');
Route::resource('admin/menus','admin/menus');
Route::resource('admin/structures','admin/structures');
Route::resource('admin/posts','admin/posts');
//Route::miss('admin/base/miss');

Route::post('admin/base/login','admin/base/login');
Route::post('admin/base/relogin','admin/base/relogin');
Route::post('admin/base/setInfo','admin/base/setInfo');
Route::post('admin/base/logout','admin/base/logout');
Route::post('admin/base/getConfigs','admin/base/getConfigs');
Route::get('admin/base/getVerify','admin/base/getVerify');

Route::post('admin/upload','admin/upload/index');

Route::post('admin/configs','admin/configs/save');

Route::post('admin/rules/deletes','admin/rules/deletes');
Route::post('admin/rules/enables','admin/rules/enables');

Route::post('admin/groups/deletes','admin/groups/deletes');
Route::post('admin/groups/enables','admin/groups/enables');

Route::post('admin/users/deletes','admin/users/deletes');
Route::post('admin/users/enables','admin/users/enables');

Route::post('admin/menus/deletes','admin/menus/deletes');
Route::post('admin/menus/enables','admin/menus/enables');

Route::post('admin/structures/deletes','admin/structures/deletes');
Route::post('admin/structures/enables','admin/structures/enables');

Route::post('admin/posts/deletes','admin/posts/deletes');
Route::post('admin/posts/enables','admin/posts/enables');

Route::post('admin/ueditor/upload','admin/ueditor/upload');
Route::get('admin/ueditor/upload','admin/ueditor/upload');

Route::get('admin/backup/','admin/backup/index');
Route::get('admin/backup/test','admin/backup/test');
return [

];
