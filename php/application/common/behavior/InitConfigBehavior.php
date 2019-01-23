<?php
// +----------------------------------------------------------------------
// | Description: 加载动态配置
// +----------------------------------------------------------------------
// | Author:  linchuangbin <linchuangbin@honghaiweb.com>
// +----------------------------------------------------------------------
namespace app\common\behavior;
use app\common\model\SystemConfig;

class InitConfigBehavior
{
    public function run($params)
    {
        //读取数据库中的配置
        $system_config = cache('DB_CONFIG_DATA'); 
        if(!$system_config){
            //获取所有系统配置
            $model=new SystemConfig();
            $system_config = $model->getDataList();
            cache('DB_CONFIG_DATA', null);
            cache('DB_CONFIG_DATA', $system_config, 36000); //缓存配置
        }
        config($system_config); //添加配置
    }
}