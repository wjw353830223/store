<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\common\model;

use think\Db;

class OrderOrder extends Common
{

    protected $autoWriteTimestamp = true;
    protected $createTime = 'created_at';
    protected $updateTime = 'updated_at';
    /**
     * 为了数据库的整洁，同时又不影响Model和Controller的名称
     * 我们约定每个模块的数据表都加上相同的前缀，比如微信模块用weixin作为数据表前缀
     */
    protected $name = 'order_order';

    /**
     * @param $keywords
     * @param $page
     * @param $limit
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
	public function getDataList($member_id, $page, $limit)
	{
        $map[] = ['member_id', 'eq', $member_id];
	    $dataCount = $this->where($map)->count('id');
        $list = $this->where($map);
        // 若有分页
        if ($page && $limit) {
            $list = $list->page($page, $limit);
        }
        $list = $list->select();
        $data['list'] = $list;
        $data['dataCount'] = $dataCount;
        return $data;
	}
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
    /**
     * [updateDataById 编辑]
     * @linchuangbin
     * @DateTime  2017-02-10T21:24:49+0800
     * @param     [type]                   $param [description]
     * @param     [type]                   $id    [购物车id]
     * @return    [type]                          [description]
     */
    public function updateDataById($param, $id)
    {
        $menu = model('OrderMenu')->get($param['menu_id']);
        $param['name'] = $menu->name;
        $checkData = $this->get($id);
        if (!$checkData) {
            $this->error = '暂无此数据';
            return false;
        }

        // 验证
        $validate = validate($this->name);
        if (!$validate->check($param)) {
            $this->error = $validate->getError();
            return false;
        }

        try {
            $this->allowField(true)->save($param, [$this->getPk() => $id]);
            return true;
        } catch(\Exception $e) {
            $this->error = '编辑失败';
            return false;
        }
    }
    /**
     * [delDataById 根据id删除数据]
     * @linchuangbin
     * @DateTime  2017-02-11T20:57:55+0800
     * @param     string                   $id     [主键]
     * @return    [type]                           [description]
     */
    public function delDataById($id = '', $delSon = false)
    {
        $car=$this->get($id);
        try {
            $car->delete();
            return true;
        } catch(\Exception $e) {
            $this->error = '删除失败';
            return false;
        }
    }
	/**
	 * [getDataById 根据主键获取详情]
	 * @linchuangbin
	 * @DateTime  2017-02-10T21:16:34+0800
	 * @param     string                   $id [主键]
	 * @return    [array]                       
	 */
	public function getDataById($id = '')
	{
		$menu = $this->get($id);
		if(!empty($menu->specs)){
		    $specs = $menu->specs;
		    foreach($specs as $key=>&$value){
		        $value['specName']=json_decode($value['specName'],true);
                $value['specValue']=json_decode($value['specValue'],true);
            }
        }
		if (!$menu) {
			$this->error = '暂无此数据';
			return false;
		}
		return $menu;
	}
}