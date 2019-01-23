<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\admin\controller;

use com\database\Baksql;
use think\Queue;
use think\Db;
class Backup extends ApiCommon
{
    //数据库备份
    public function index()
    {
        //获取操作内容：（备份/下载/还原/删除）数据库  backup/dowonload/restore/del
        $type=input('type');
        //获取需要操作的数据库名字
        $name=input('name');

        $config = array_merge(config('backup.'), config('database.'));

        $backup = new Baksql($config);
        switch ($type) {
            //备份 php think queue:listen --queue backupQueue --timeout 0
            case "backup":
                $isPushed=$this->addTaskJob($config,'backup');
                $info='success';
                if($isPushed===false){
                    $info='error';
                }
                break;
            //下载
            case "dowonload":
                $info = $backup->downloadFile($name);
                break;
            //还原
            case "restore":
                $isPushed=$this->addTaskJob($config,'restore');
                $info='success';
                if($isPushed===false){
                    $info='error';
                }
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
    public function addTaskJob($config,$type){
        // 1.当前任务将由哪个类来负责处理。当轮到该任务时，系统将生成一个该类的实例，并调用其 fire 方法
        $jobHandlerClassName  = 'app\common\job\Backup@backup';
        if($type=='restore'){
            $jobHandlerClassName  = 'app\common\job\Backup@restore';
        }
        // 2.当前任务归属的队列名称，如果为新队列，会自动创建
        $jobQueueName  	  = "backupQueue";
        // 3.当前任务所需的业务数据 . 不能为 resource 类型，其他类型最终将转化为json形式的字符串
        $jobData       	  = [$config];
        // 4.将该任务推送到消息队列，等待对应的消费者去执行
        $isPushed = Queue::push( $jobHandlerClassName , $jobData , $jobQueueName );
        // database 驱动时，返回值为 1|false  ;   redis 驱动时，返回值为 随机字符串|false
        return $isPushed;
    }
    public function test(){
        $cursor = Db::name('v9_admin')->limit(1000,1000)->cursor();
        foreach($cursor as $user){
            echo $user['username'].PHP_EOL;
        }
    }
}
 