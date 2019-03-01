<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\common\model;


class Table extends Common
{

    protected static function init()
    {
        self::afterInsert(function ($table) {
            $hash = md5(md5($table->name.$table->id).$table->seats);
            $table->hash=$hash;
            $table->save();
        });
        self::beforeUpdate(function ($table) {
            $hash = md5(md5($table->name.$table->id).$table->seats);
            $table->hash=$hash;
        });
    }
    /**
     * 为了数据库的整洁，同时又不影响Model和Controller的名称
     * 我们约定每个模块的数据表都加上相同的前缀，比如微信模块用weixin作为数据表前缀
     */
    protected $name = 'order_table';

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
            $map['table.name'] = ['like', '%'.$keywords.'%'];
        }
        $dataCount = $this->alias('table')->where($map)->count('id');

        $list = $this
            ->where($map)
            ->alias('table')
            ->join('__ADMIN_STRUCTURE__ structure', 'table.structure_id=structure.id', 'LEFT')
            ->field('table.*, structure.name as structure_name');
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
	 * [getDataById 根据主键获取详情]
	 * @linchuangbin
	 * @DateTime  2017-02-10T21:16:34+0800
	 * @param     string                   $id [主键]
	 * @return    [array]                       
	 */
	public function getDataById($id = '')
	{
		$data = $this
				->alias('table')
				->where('table.id', $id)
				->join('__ADMIN_STRUCTURE__ structure', 'table.structure_id=structure.id', 'LEFT')
				->field('table.*, structure.name as structure_name')
				->find();
		if (!$data) {
			$this->error = '暂无此数据';
			return false;
		}
		return $data;
	}

}