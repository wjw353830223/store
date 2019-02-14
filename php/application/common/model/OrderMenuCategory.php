<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\common\model;

use think\Db;

class OrderMenuCategory extends Common
{

    /**
     * 为了数据库的整洁，同时又不影响Model和Controller的名称
     * 我们约定每个模块的数据表都加上相同的前缀，比如微信模块用weixin作为数据表前缀
     */
    protected $name = 'order_menu_category';

    /**
     * @param $keywords
     * @param $page
     * @param $limit
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
	public function getDataList()
	{
        $cat = new \com\Category('order_menu_category', array('id', 'pid', 'name', 'name'));
        $data = $cat->getList('', 0, 'id');
        return $data;
	}
    public function getSortDataList(){
	    $data = $this->getDataList();
	    if(!empty($data)){
	        $data = $this->genTree9($data);
        }
        return $data;
    }
    public function genTree5($items) {
	    $data = [];
	    foreach($items as $item){
	        $item['text'] = $item['else'];
            $data[$item['id']] = $item;
        }

        foreach ($data as $item)
            $data[$item['pid']]['children'][$item['id']] = &$data[$item['id']];
        return isset($data[0]['children']) ? $data[0]['children'] : array();
    }
    function genTree9($items) {
        $data = [];
        foreach($items as $item){
            $item['text'] = $item['else'];
            $data[$item['id']] = $item;
        }
        $tree = array(); //格式化好的树
        foreach ($data as $item)
            if (isset($data[$item['pid']]))
                $data[$item['pid']]['children'][] = &$data[$item['id']];
            else
                $tree[] = &$data[$item['id']];
        return $tree;
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
		$data = $this
				->where('id', $id)
				->find();
		if (!$data) {
			$this->error = '暂无此数据';
			return false;
		}
		return $data;
	}
}