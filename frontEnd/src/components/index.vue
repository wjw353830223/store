<template>
    <div id='index'>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in swipeImages" :key="index">
                <img :src="image" />
            </van-swipe-item>
        </van-swipe>
        <div class='tese'>
            <p class='title'>本店特色</p>
            <div class='ads'>
                <div class='menu' v-for="(image, index) in teseImages" :key="index">
                    <img :src="image" />
                </div>
            </div>
        </div>
        <div class='search'>
            <p class='title'>今天吃点什么?</p>
            <div class='content'>
                <van-search
                background="#FE8D7A"
                v-model="search"
                placeholder="请输入您想吃的食物"
                :show-action='showAction'
                input-align='left'
                @search="onSearch"
                @cancel="onCancel"
                @clear="onClear"
                >
                    <div slot="action" @click="onSearch">搜索</div>
                    <div slot="left-icon">
                        <van-icon name="search" />
                    </div>
                </van-search>
            </div>
        </div>
        <tabbar></tabbar>
    </div>
</template>
<script>
import http from '../assets/js/http'
import Tabbar from './common/tabbar'
export default {
    data () {
        return {
            swipeImages: [],
            teseImages:[],
            search:'',
            showAction:true
        }
    },
    methods: {
        onSearch() {
            this.$toast(this.value);
        },
        onCancel() {
            this.$toast(this.$t('cancel'));
        },
        onClear(){

        }
    },
    components: {
       'tabbar': Tabbar,
    },
    created() {
        let _self=this
        this.apiGet('index/position').then((res) => {
          this.handelResponse(res, (data) => {
           data[0].adverts.map(function(item){
               _self.swipeImages.push(baseUrl + item.image)
           })
           data[1].adverts.map(function(item){
               _self.teseImages.push(baseUrl + item.image)
           })
          })
        })
    },
    mixins: [http]
}
</script>
<style lang="less">
.title{
   width:100%;
   height:0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.tese {
    background-color:#FE937F;
}
.tese .ads{ 
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.tese .ads .menu{
    width:3rem;
}
.tese .ads .menu img{
    height:2rem;
}
.search{
    padding-top:100px;
    width:100%;
    height:400px;
}
.search .content{
    margin:0 auto;
    width:90%;
}
#index  .van-swipe img{
    width:100%;
    height:375px;
}
</style>


