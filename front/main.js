import app from './app.ui'
import { fetch } from "./static/utils/http"
let options = {
  app: app,
  beforeEach (to, from, next) {
    let tid = ui.getStorageSync('tid')
    let tableName = ui.getStorageSync('tableName')
    if(to.path == '/pages/index'){
      tid = to.query.tid || tid 
      tableName = to.query.tableName || tableName
      ui.showAlert({
        title: '点餐须知',
        content:  '为避免桌号不对应，请不要通过手动输入网址或者通过网页历史记录访问，请用手机浏览器通过扫描您所在的餐桌专有二维码进行访问，以便我们给你提供更精准的服务。谢谢！',
        success () {
          if(!tid || !tableName){
            ui.showToast({
              title: '请重新扫描餐桌二维码'
            })
            return
          }
          ui.showConfirm({
            content: '您所在的桌号是 ' + tableName + '?',
            confirmButtonText: '是',
            cancelButtonText: '否',
            success (result) {
              if(result.confirm){
                ui.setStorageSync('tid',tid)
                ui.setStorageSync('tableName',tableName)
              }else{
                ui.showToast({
                  title: '请重新扫描餐桌二维码'
                })
              }
            }
          })
        }
      })
    } else {
      if(!tid){
        ui.showToast({
          title: '请重新扫描餐桌二维码'
        })
        return
      }
    }
    next()
  }
}
ui.extend({
  fetch:fetch,
})
ui.start(options)