<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\common\model;

use think\Db;

class OrderOrderPartition extends Common
{

    protected $autoWriteTimestamp = true;
    protected $createTime = 'created_at';
    protected $updateTime = 'updated_at';
    /**
     * 为了数据库的整洁，同时又不影响Model和Controller的名称
     * 我们约定每个模块的数据表都加上相同的前缀，比如微信模块用weixin作为数据表前缀
     */
    protected $name = 'order_order_partition';
    /**
     * [createData 新建]
     * @linchuangbin
     * @DateTime  2017-02-10T21:19:06+0800
     * @param     array                    $param [description]
     * @return    [array]                         [description]
     */
    public function createData($param)
    {
        $menu = model('OrderMenu')->get($param['menu_id']);
        $param['name'] = $menu->name;
        $param['image'] = $menu->image;
        if($param['sku_id']){
            $sku=model('OrderMenuAttribution')->get($param['sku_id']);
            $param['image'] = $sku->image;
        }
        // 验证
        $validate = validate($this->name);
        if (!$validate->check($param)) {
            $this->error = $validate->getError();
            return false;
        }
        try {
            $carData = $this->where([
                'member_id'=>$param['member_id'],
                'menu_id'=>$param['menu_id'],
                'sku_id'=>$param['sku_id']
            ])->find();
            if(empty($carData)){
                $this->data($param)->allowField(true)->save();
                return true;
            }
            else{
                if($this->updateDataById($param, $carData['id'])===false){
                    $this->error = '更新失败';
                    return false;
                }
                return true;
            }

        } catch(\Exception $e) {
            $this->error = '添加失败';
            return false;
        }
    }
}