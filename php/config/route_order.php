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
    ],
	// 【规则】批量删除
	'order/tables/deletes' => ['order/tables/deletes', ['method' => 'POST']],
    // 【菜单】批量启用/禁用
    'order/tables/enables' => ['order/tables/enables', ['method' => 'POST']],
	// MISS路由
	'__miss__'  => 'admin/base/miss',
];