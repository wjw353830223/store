<?php
// +----------------------------------------------------------------------
// | Description: Api基础类，验证权限
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\index\controller;


class Position extends ApiCommon
{
    public function index(){
        $advertPositionModel = model('OrderPosition');
        $data = $advertPositionModel->getDataListByStatus();
        return resultArray(['data' => $data]);
    }
}
