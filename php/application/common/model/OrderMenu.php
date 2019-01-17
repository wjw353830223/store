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
            $this->data($param)->allowField(true)->save();
            return true;
        } catch(\Exception $e) {
            $this->error = '添加失败';
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
		$data = $this
				->alias('menu')
				->find();
		if (!$data) {
			$this->error = '暂无此数据';
			return false;
		}
		return $data;
	}
}