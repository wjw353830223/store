import app from './app.ui'
import { fetch } from "./static/utils/http"
import { establish, sendSocketMessage } from "./static/utils/socket"
import { Api } from './api.js'
let options = {
  app: app,
  beforeEach (to, from, next) {
    let tid=to.query.tid || ui.getStorageSync('tid')
    let tableHash = to.query.tableHash || ui.getStorageSync('tableHash')
    if(!tid || !tableHash){
      ui.showAlert({
        title: '访问提示',
        content:  '访问来源非法！请扫描餐桌二维码访问',
        success(){

        },
      })
      return
    }
    ui.setStorageSync('tableHash',tableHash)
    ui.setStorageSync('tid',tid)
    let accessTime = ui.getStorageSync('accessTime') || null
    let nowTime = Date.parse(new Date()) / 1000
    if(!accessTime){
      ui.setStorageSync('accessTime',nowTime)
    }
    //设置系统访问3小时过时 主要目的是让用户重新扫码访问 防止用户用历史记录访问系统 造成桌号对应不上
    if(nowTime - accessTime > 3 * 3600){
      ui.showAlert({
        title: '访问提示',
        content:  '访问已过时，请重新扫描餐桌二维码！',
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
let token = ui.getStorageSync('token')
if(token){
    clearInterval(window.timer)
    establish()
}
ui.extend({ fetch, sendSocketMessage })
ui.start(options)