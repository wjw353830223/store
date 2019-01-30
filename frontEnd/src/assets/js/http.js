let axios = window.axios
let store = window.store
let sha1 = require('sha1');
const apiMethods = {
    methods: {
      urlEncode(param, key, encode) {
        if (param==null) return '';
        var paramStr = '';
        var t = typeof (param);
        if (t == 'string' || t == 'number' || t == 'boolean') {
            paramStr += '&' + key + '='  + ((encode==null||encode) ? encodeURIComponent(param) : param); 
        } else {
          for (var i in param) {
              var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
              paramStr += this.urlEncode(param[i], k, encode)
          }
        }
        return paramStr;
      },
      apiGet(url, data) {
        let _self=this;
        return new Promise((resolve, reject) => {
          axios.get(url, data).then((response) => {
            resolve(response)
          }, (response) => {
            reject(response)
            _self.$toast.fail('请求超时，请检查网络');
          })
        })
      },
      apiPost(url, data) {
        let newData = Object.assign(data, {
          token: store.state.token,
          _timestamp: Date.parse(new Date()) / 1000
        });
        let parseData = Object.keys(newData).sort();
        let newObj={};
        for (let i = 0; i < parseData.length; i++) {
          newObj[parseData[i]] = newData[parseData[i]];
        }
        let queryData = this.urlEncode(newObj).slice(1)
        let signature = sha1(queryData);
        newObj.signature = signature
        let _self=this;
        return new Promise((resolve, reject) => {
          axios.post(url, newObj).then((response) => {
            resolve(response)
          }).catch((response) => {
            reject(response)
            _self.$toast.fail('请求超时，请检查网络');
          })
        })
      },
      apiDelete(url, id) {
        let _self=this;
        return new Promise((resolve, reject) => {
          axios.delete(url + id).then((response) => {
            resolve(response)
          }, (response) => {
            reject(response)
            _self.$toast.fail('请求超时，请检查网络');
          })
        })
      },
      apiPut(url, id, obj) {
        let _self=this;
        return new Promise((resolve, reject) => {
          axios.put(url + id, obj).then((response) => {
            resolve(response)
          }, (response) => {
            reject(response)
            _self.$toast.fail('请求超时，请检查网络');
          })
        })
      },
      handelResponse(res, cb, errCb) {
        if (res.code == 200) {
          cb(res.data)
        } else {
          if (typeof errCb == 'function') {
            errCb()
          }
          this.handleError(res)
        }
      },
      handleError(res) {
        let _self=this;
        if (res.code) {
          if(res.code=='400') {
            _self.$toast.fail(res.error);
          }
        } else {
          _self.$toast.fail('default error');
        }
      },
      reAjax(url, data) {
        let _self=this;
        return new Promise((resolve, reject) => {
          axios.post(url, data).then((response) => {
            resolve(response.data)
          }, (response) => {
            reject(response)
            _self.$toast.fail('请求超时，请检查网络');
          })
        })
      }
    },
    computed: {
      
    },
    mounted() {
      
    }
  }
  
  export default apiMethods
  