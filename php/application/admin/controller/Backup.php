<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\admin\controller;

use com\database\Baksql;
use think\Config;

class Backup extends ApiCommon
{
    //数据库备份
    public function index()
    {
        //获取操作内容：（备份/下载/还原/删除）数据库  backup/dowonload/restore/del
        $type=input('type');
        //获取需要操作的数据库名字
        $name=input('name');
        $config = Config::get('database');
        $backup = new Baksql($config);
        switch ($type) {
            //备份
            case "backup":
                $info = $backup->backup();
                break;
            //下载
            case "dowonload":
                $info = $backup->downloadFile($name);
                break;
            //还原
            case "restore":
                $info = $backup->restore($name);
                break;
            //删除
            case "del":
                $info = $backup->delfilename($name);
                break;
            //如果没有操作，则查询已备份的所有数据库信息
            default:
                $info = array_reverse($backup->get_filelist());
        }
        return resultArray(['data' => $info]);
    }
}
 