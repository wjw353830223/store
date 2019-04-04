const Api = {
    login: {
        path:'index/open/login',
        auth:false
    },
    table: {
        path:'index/open/table',
        auth:false
    },
    position: {
        path:'index/position/index',
        auth:false
    },
    menusIndex: {
        path:'index/menus/index',
        auth:false
    },
    menusRead: {
        path:'index/menus/',
        auth:false
    },
    categoryIndex: {
        path:'index/category/index',
        auth:false
    },
    categorRead: {
        path:'index/category/read',
        auth:false
    },
    bind: {
        path:'index/member/bind',//'admin/users/bind'
        auth:true
    },
    memberRead: {
        path:'index/member/read',
        auth:true
    },
    car: {
        path:'index/car',
        auth:true
    },
    carUpdates: {
        path:'index/car/updates',
        auth:true
    },
    order: {
        path:'index/order',
        auth:true
    },
    message: {
        path:'index/message',
        auth:true
    }
}
//const baseUrl='http://www.vuethink.com/'
const baseUrl='http://192.168.1.100/'
const wsUrl='ws://192.168.1.100:7272'
export  { Api, baseUrl, wsUrl }