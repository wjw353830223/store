<template>
    <div id='tabbar'>
        <van-tabbar v-model="active" >
            <van-tabbar-item icon="fuwu" @click='waiter'>服务员</van-tabbar-item>
            <van-tabbar-item icon="airudiantubiaohuizhi-zhuanqu_meishicaipu">码上点餐</van-tabbar-item>
            <van-tabbar-item :info="info" icon="navicon-xtcp">我的菜谱</van-tabbar-item>
            <van-tabbar-item  icon="gerenzhongxin" @click="member">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import http from '../../assets/js/http'
import socket from '../../assets/js/socket'
export default {
    name: 'Tabbar',
    data () {
        return {
            active: 0,
            info:10
        }
    },
    methods: {
        waiter(){
           let _self=this;
           this.$dialog.confirm({
                message: '呼叫服务员吗？'
            }).then(() => {
                let token = store.state.token;
                if(!token){
                    _self.$dialog.alert({
                        message:'系统检测到你未登录，请先登录！'
                    }).then(()=> {
                        router.replace({ 
                            path: Api.login.path,
                            query: { redirect: router.currentRoute.fullPath }
                        });
                    })
                    return;
                }
                _self.sendSock(
                    {
                        type: 'waiter',
                        data: {
                            tid:2,
                            mid:16
                        }
                    },
                    //this.bindUid
                )
            }).catch(() => {
                // on cancel
            });
       },
       member() {
            let token = store.state.token;
            if(!token){
                _self.$dialog.alert({
                    message:'系统检测到你未登录，请先登录！'
                }).then(()=> {
                    router.replace({ 
                        path: Api.login.path,
                        query: { redirect: router.currentRoute.fullPath }
                    });
                })
                return;
            }
            router.push({
                path: Api.memberRead.path
            })
       }
    },
    components: {

    },
    created() {
    },
    mixins: [http, socket]
}
</script>
<style lang="less">
#tabbar .van-tabbar{
    height:120px;
}
#tabbar .van-tabbar .van-tabbar-item .van-info{
    right:-15px;
}
</style>


