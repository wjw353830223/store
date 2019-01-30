<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\common\model;

use think\Db;

class OrderPosition extends Common
{

    /**
     * 为了数据库的整洁，同时又不影响Model和Controller的名称
     * 我们约定每个模块的数据表都加上相同的前缀，比如微信模块用weixin作为数据表前缀
     */
    protected $name = 'order_ads_position';
    public function adverts(){
        return $this->hasMany('Advert','pid','id');
    }
    public function getDataList(){
        $list = $this->select();
        if(!$list->isEmpty()){
            foreach($list as $val){
                $val['adverts']=$val->adverts;
            }
        }
        return $list;
    }
    public function getDataListByStatus(){
        $list = $this->select();
        if(!$list->isEmpty()){
            foreach($list as $val){
                $adverts = $val->adverts->toArray();
                unset($val->adverts);
                if(!empty($adverts)){
                    foreach($adverts as $kk=>$vv){
                        if($vv['status']==0){
                            unset($adverts[$kk]);
                        }
                    }
                }
                $val['adverts']=array_values($adverts);
            }
        }
        return $list;
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