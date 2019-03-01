import app from './app.ui'
import { fetch } from "./static/utils/http"
import { Api } from './api.js'
let options = {
  app: app,
  beforeEach (to, from, next) {
    let tid=to.query.tid
    let tableHash = to.query.tableHash
    if(tid && tableHash){
      ui.setStorageSync('tableHash',tableHash)
      ui.setStorageSync('tid',tid)
      ui.setStorageSync('accessTime',Date.parse(new Date()) / 1000)
    }else{
      tid = ui.getStorageSync('tid')
      tableHash = ui.getStorageSync('tableHash')
      let accessTime = ui.getStorageSync('accessTime')
      let nowTime = Date.parse(new Date()) / 1000
      //设置系统访问3小时过时 主要目的是让用户重新扫码访问 防止用户用历史记录访问系统 造成桌号对应不上
      if(accessTime && nowTime - accessTime > 3 * 3600){
        ui.showAlert({
          title: '访问提示',
          content:  '访问已过时，请重新扫描餐桌二维码！',
          success(){
  
          },
        })
        return
      }
    }
    if(!tid || !tableHash){
      ui.showAlert({
        title: '访问提示',
        content:  '访问来源非法！请扫描餐桌二维码访问',
        success(){

        },
      })
      return
    }
    fetch(Api.table.path, {
      method:'POST',
      data: {
        tid:tid,
        hash:tableHash
      }
    }).then((response) => {
      if(response=='success'){
        next()
      }else{
        ui.showAlert({
          title: '访问提示',
          content:  response + '!请重新扫描餐桌二维码访问',
          success(){
  
          },
        })
      }
    }).catch((error) => {
      console.log(error)
    })
  }
}
ui.extend({
  fetch:fetch
})
ui.start(options)