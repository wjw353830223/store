const Api = {
    login: {
        path:'index/open/login',
        auth:false
    },
    position: {
        path:'index/position',
        auth:false
    },
    menusIndex: {
        path:'index/menus',
        auth:false
    },
    menusRead: {
        path:'index/menus/read',
        auth:false
    },
    categorIndex: {
        path:'index/category',
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
}
const baseUrl='http://www.vuethink.com/'
const wsUrl='ws://127.0.0.1:7272'
export  { Api, baseUrl, wsUrl }