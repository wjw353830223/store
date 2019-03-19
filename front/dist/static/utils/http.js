import { urlEncode } from './util'
import { Api, baseUrl } from '../../api.js'
import './jquery'
import './jquery.sha1'
//接口请求封装
function fetch(path, options) {
    return new Promise((resolve, reject) => {
        let auth=null
        let arr =  Object.keys(Api)
        for(let i=0; i< arr.length; i++){
            if(Api[arr[i]].path==path){
                auth = Api[arr[i]].auth
                break;
            }
        }
        let data = options.data || {}
        let newObj={}
        //需要认证的接口
        if(auth===true){
            let token = ui.getStorageSync('token');
            if(!token){
                ui.showConfirm({
                    content: '系统检测到您尚未登录，请先登录',
                    confirmButtonText: '去登录',
                    cancelButtonText: '取消',
                    success (result) {
                        if(result.confirm){
                            ui.showPrompt({
                                title: '登录',
                                placeholder: '请输入您的电话',
                                confirmButtonText: '登录',
                                cancelButtonText: '取消',
                                success: (result) => {
                                    login(result.value).then((response) => {
                                        console.log(response)
                                        if(response.code=='200'){
                                            ui.showToast({
                                                title: '登录成功！'
                                            })
                                            ui.setStorageSync('token',response.data);
                                        }else{
                                            ui.showToast({
                                                title: '登录失败！'
                                            })
                                        }
                                    }).catch((error)=>{
                                        console.log(error)
                                    })
                                }
                            })
                        }
                    }
                })
                return;
            }
            let newData = Object.assign(data, {
                    token: token,
                    _timestamp: Date.parse(new Date()) / 1000,
                    path: path
                });
            let parseData = Object.keys(newData).sort();
            for (let i = 0; i < parseData.length; i++) {
                newObj[parseData[i]] = newData[parseData[i]];
            }
            let queryData = urlEncode(newObj).slice(1)
            let signature = $.sha1(queryData);
            newObj.signature = signature
        }else{
            newObj =  Object.assign(data, {
                path: path
            });
        }
        let method=options.method.toUpperCase() || 'GET'
        let header = {}
        if(method=='POST'){
            header = Object.assign({
                'content-type': 'application/x-www-form-urlencoded'
            }, options.header)
        }
        ui.request({
            url: baseUrl + path,
            method: method,
            data: newObj,
            header: header,
            success: function(res){
                if(res.data.code=='200') {
                    resolve(res.data.data)
                }else{
                    if(path!=Api.table.path){
                        ui.showConfirm({
                            content: '登录已过期，请重新登录',
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            success (result) {
                                if(result.confirm){
                                    ui.showPrompt({
                                        title: '登录',
                                        placeholder: '请输入您的电话',
                                        confirmButtonText: '登录',
                                        cancelButtonText: '取消',
                                        success: (result) => {
                                            login(result.value).then((response) => {
                                                if(response.code=='200'){
                                                    ui.showToast({
                                                        title: '登录成功！'
                                                    })
                                                }else{
                                                    ui.showToast({
                                                        title: '登录失败！'
                                                    })
                                                }
                                            }).catch((error)=>{
                                                console.log(error)
                                            })
                                        }
                                    })
                                }
                            }
                        }) 
                    }
                    resolve(res.data.error)
                }
            },
            fail: reject
        })
    })
}
//登录接口
function login(mobile){
    return new Promise((resolve,reject) => {
        ui.request({
            url: baseUrl + Api.login.path,
            method: 'POST',
            data: {
                mobile: mobile
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: function(res){
                if(res.data.code=='200'){
                    ui.setStorageSync('token',res.data.data);
                    resolve(res.data)
                }
                if(res.data.code=='400'){
                    reject(res.data)
                }
            },
            fail: reject
        })
    })
}
export { fetch, login }