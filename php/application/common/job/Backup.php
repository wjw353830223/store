<?php
namespace app\common\job;
use think\Db;
use think\queue\Job;
use tp5er\Backup as Baksql;
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/1/19
 * Time: 15:32
 */
class Backup{
    private $db=null;
    private $config=[];

    /**
     * fire方法是消息队列默认调用的方法
     * @param Job            $job      当前的任务对象
     * @param array|mixed    $data     发布任务时自定义的数据
     */
    public function backup(Job $job,$data){
        // 如有必要,可以根据业务需求和数据库中的最新数据,判断该任务是否仍有必要执行.
        $isJobStillNeedToBeDone = $this->checkDatabaseToSeeIfJobNeedToBeDone($data);
        if(!$isJobStillNeedToBeDone){
            $job->delete();
            return;
        }
        $isJobDone=false;
        try{
            $isJobDone = $this->doBackup();
        }catch(\Exception $e){
            echo $e->getMessage();
            $job->delete();
        }
        if ($isJobDone) {
            $job->delete();
        }else{
            if ($job->attempts() > 1) {
                $job->delete();
                // 也可以重新发布这个任务
                //$job->release(2);
            }
        }
    }
    public function restore(Job $job,$data){
        // 如有必要,可以根据业务需求和数据库中的最新数据,判断该任务是否仍有必要执行.
        $isJobStillNeedToBeDone = $this->checkDatabaseToSeeIfJobNeedToBeDone($data);
        if(!$isJobStillNeedToBeDone){
            $job->delete();
            return;
        }
        $isJobDone=false;
        try{
            $isJobDone = $this->doRestore();
        }catch(\Exception $e){
            //echo $e->getMessage();
            echo $e->getTraceAsString();
            $job->delete();
        }
        if ($isJobDone) {
            //如果任务执行成功， 记得删除任务
            $job->delete();
            print("<info>Restore Job has been done and deleted"."</info>\n");
        }else{
            if ($job->attempts() > 1) {
                //通过这个方法可以检查这个任务已经重试了几次了
                print("<warn>Restore Job has been retried more than 1 times!"."</warn>\n");
                $job->delete();
            }
        }
    }

    /**
     * 有些消息在到达消费者时,可能已经不再需要执行了
     * @param array|mixed    $data     发布任务时自定义的数据
     * @return boolean                 任务执行的结果
     */
    private function checkDatabaseToSeeIfJobNeedToBeDone($data){
        return true;
    }
    private function doBackup() {
        $db= $this->__connect();
        $this->doDelete();
        $tables = $db->dataList();
        foreach($tables as $key=>$table){
            $db->setFile([
                'name'=>date('Ymd-His'),
                'part'=>1
            ])->backup($table['name']);
        }
        return true;
    }
    private function doDelete() {
        $db= $this->__connect();
        $fileList=$db->fileList();
        if(!empty($fileList)){
            foreach($fileList  as $key=>$val){
                $db->delFile($val['time']);
            }
        }
    }
    private function doRestore() {
        $db= $this->__connect();
        $fileList=$db->fileList();
        if(!empty($fileList)){
            foreach($fileList as $key=>$val){
                  $files=$db->getFile('timeverif',$val['time']);
                  foreach($files as $file){
                      $file['part']=1;
                      $db->setFile($file)->import(0);
                  }
            }
        }
        return true;
    }
    private function __connect($config=null){
        if(is_null($config)){
           $config=[
               'path'     => config('backup.')['path'],//数据库备份路径
               'part'     => 10485760,//数据库备份卷大小 10M
               'compress' => 1,//数据库备份文件是否启用压缩 0不压缩 1 压缩
               'level'    => 9 //数据库备份文件压缩级别 1普通 4 一般  9最高
           ];
        }
        if(is_null($this->db)){
            $db= new Baksql($config);
            $this->db=$db;
            return $db;
        }
        return $this->db;
    }
}