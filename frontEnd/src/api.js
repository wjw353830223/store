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
export  { Api }