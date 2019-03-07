<?php
// +----------------------------------------------------------------------
// | Description: 岗位
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\common\model;

class Message extends Common
{

    /**
     * 为了数据库的整洁，同时又不影响Model和Controller的名称
     * 我们约定每个模块的数据表都加上相同的前缀，比如微信模块用weixin作为数据表前缀
     */
	protected $name = 'message';
    protected $createTime = 'create_at';
    protected $updateTime = 'update_at';
	protected $autoWriteTimestamp = true;
	const COMMUNICATE_CUSTOMER_TO_WAITER = 1;
    const COMMUNICATE_CUSTOMER_TO_CHIEF = 2;
    const COMMUNICATE_WAITER_TO_CHIEF = 3;
    const COMMUNICATE_CHIEF_TO_CUSTOMER = 4;
    const COMMUNICATE_CHIEF_TO_WAITER = 5;
    public function updateDataById($param, $id)
    {
        try {
            $this->allowField(true)->save($param, [$this->getPk() => $id]);
            return true;
        } catch(\Exception $e) {
            $this->error = '编辑失败';
            return false;
        }
    }
}