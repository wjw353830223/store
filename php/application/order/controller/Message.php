<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\order\controller;


class Message extends ApiCommon
{

    public function update()
    {
        $messageModel = model('Message');
        $param = $this->param;
        $data = $messageModel->updateDataById($param, $param['id']);
        if (!$data) {
            return resultArray(['error' => $messageModel->getError()]);
        }
        return resultArray(['data' => 'success']);
    }
}
