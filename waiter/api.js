const Api = {
    login: 'admin/base/login',
    bind: 'admin/users/bind',
    order: 'order/orders',
    table: 'order/tables',
    message:'order/message',
    category:'index/category',
    indexOrder:'index/order',
    car:'index/car',
    menu:'index/menus',
    carUpdates: 'index/car/updates'
}
const baseUrl='http://192.168.1.100/'
const wsUrl='ws://192.168.1.100:7272'
// const baseUrl='http://www.vuethink.com/'
// const wsUrl='ws://192.168.1.100:7272'
export  { Api, baseUrl, wsUrl }