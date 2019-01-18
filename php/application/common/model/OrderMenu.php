<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\common\model;

use think\Db;

class OrderMenu extends Common
{

    /**
     * 为了数据库的整洁，同时又不影响Model和Controller的名称
     * 我们约定每个模块的数据表都加上相同的前缀，比如微信模块用weixin作为数据表前缀
     */
    protected $name = 'order_menu';


    public function specs(){
        return $this->hasMany('OrderMenuAttribution','menu_id','id');
    }
    /**
     * @param $keywords
     * @param $page
     * @param $limit
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
	public function getDataList($keywords, $page, $limit)
	{
	    $map = [];
        if ($keywords) {
            $map['menu.name'] = ['like', '%'.$keywords.'%'];
        }
        $dataCount = $this->alias('menu')->where($map)->count('id');
        $list = $this->alias('menu')->where($map)
            ->join('__ORDER_MENU_CATEGORY__ category', 'menu.category_id=category.id', 'LEFT')
            ->field('menu.*, category.name as category_name');
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
        // 验证
        $validate = validate($this->name);
        if (!$validate->check($param)) {
            $this->error = $validate->getError();
            return false;
        }
        try {
            if(!empty($param['attributions'])){
                $param['attributions'] = json_encode($param['attributions']);
            }
            $this->data($param)->allowField(true)->save();
            if(!empty($param['postSpec'])){
                $specs = $param['postSpec'];
                foreach($specs as $key=>&$value){
                    $value['specName']=json_encode($value['specName']);
                    $value['specValue']=json_encode($value['specValue']);
                }
                $this->specs()->saveAll($specs);
            }
            return true;
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
     * @param     [type]                   $id    [description]
     * @return    [type]                          [description]
     */
    public function updateDataById($param, $id)
    {
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
            if(!empty($param['attributions'])){
                $param['attributions'] = json_encode($param['attributions']);
            }
            $this->allowField(true)->save($param, [$this->getPk() => $id]);
            if(!empty($param['postSpec'])){
                OrderMenuAttribution::destroy(function($query) use ($id){
                    $query->where(['menu_id'=>$id]);
                });
                $specs = $param['postSpec'];
                foreach($specs as $key=>&$value){
                    $value['specName']=json_encode($value['specName']);
                    $value['specValue']=json_encode($value['specValue']);
                }
                $this->specs()->saveAll($specs);
            }
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
     * @param     boolean                  $delSon [是否删除子孙数据]
     * @return    [type]                           [description]
     */
    public function delDataById($id = '',$delSon = false)
    {
        $menu=$this->get($id,'specs');
        try {
            $menu->together('specs')->delete();
            return true;
        } catch(\Exception $e) {
            $this->error = '删除失败';
            return false;
        }
    }
    /**
     * [delDatas 批量删除数据]
     * @linchuangbin
     * @DateTime  2017-02-11T20:59:34+0800
     * @param     array                   $ids    [主键数组]
     * @param     boolean                 $delSon [是否删除子孙数据]
     * @return    [type]                          [description]
     */
    public function delDatas($ids = [], $delSon = false)
    {
        if (empty($ids)) {
            $this->error = '删除失败';
            return false;
        }
        try {
            $this->where($this->getPk(), 'in', $ids)->delete();
            OrderMenuAttribution::destroy(function($query) use ($ids){
                $query->where('menu_id', 'in', $ids);
            });
            return true;
        } catch (\Exception $e) {
            $this->error = '操作失败';
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