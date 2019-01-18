<?php
// +----------------------------------------------------------------------
// | Description: 基础框架路由配置文件
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honghaiweb.com>
// +----------------------------------------------------------------------

return [
    // 定义资源路由
    '__rest__'=>[
        'order/tables'		   =>'order/tables',
        'order/category'		   =>'order/menuCategory',
        'order/menus'		   =>'order/menus',
    ],
	// 【餐桌】批量删除
	'order/tables/deletes' => ['order/tables/deletes', ['method' => 'POST']],
    // 【餐桌】批量启用/禁用
    'order/tables/enables' => ['order/tables/enables', ['method' => 'POST']],
    // 【餐桌】二维码
    'order/tables/qrcode' => ['order/tables/qrcode', ['method' => 'GET']],
    // 【菜谱分类】批量删除
    'order/category/deletes' => ['order/menuCategory/deletes', ['method' => 'POST']],
    // 【菜谱分类】批量启用/禁用
    'order/category/enables' => ['order/menuCategory/enables', ['method' => 'POST']],
    // 【菜谱】批量删除
    'order/menus/deletes' => ['order/menus/deletes', ['method' => 'POST']],
    // 【菜谱】批量启用/禁用
    'order/menus/enables' => ['order/menus/enables', ['method' => 'POST']],
    // 【菜谱】上传菜谱图片
    'order/menus/upload' => ['order/menus/upload', ['method' => 'POST']],//uploadDetailFiles
    // 富文本编辑器上传文件
    'order/menus/detailFiles' => ['order/menus/uploadDetailFiles', ['method' => 'POST']],//uploadDetailFiles
	// MISS路由
	'__miss__'  => 'admin/base/miss',
];