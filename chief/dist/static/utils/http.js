import { Api, baseUrl } from '../../api.js'
//接口请求封装
function fetch(path, options) {
    return new Promise((resolve, reject) => {
        let header = options.header;
        if(path !== Api.login){
            let authKey = ui.getStorageSync('authKey');
            let sessionId = ui.getStorageSync('sessionId');
            if(!authKey || !sessionId){
                ui.showToast({ title: '请求错误！请重新登录！'})
                return;
            }
            header = Object.assign({ authKey, sessionId }, options.header)
        }
        ui.request({
            url: baseUrl + path,
            method: options.method,
            data: options.data,
            header: header,
            success: function(res){
                if(res.data.code=='200') {
                    resolve(res.data.data)
                }else{
                    resolve(res.data.error)
                }
            },
            fail: reject
        })
    })
}
export { fetch }