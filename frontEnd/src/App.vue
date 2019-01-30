<template>
  <div id="app">
    <div v-show="isLoading">加载中</div>
    <router-view v-show="!isLoading"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
   
  },
  computed: {
      isLoading() {
          return this.$store.state.isLoading
      }
  }
}
</script>
<style>
.html{
  width:750px;
}
img{
  width:100%;
}
@font-face {
  font-family: 'van-icon';
  src: url('./assets/fonts/iconfont.ttf') format('truetype');
}
.van-icon {
  font-family: "van-icon" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.van-icon-fuwu:before {
  content: "\e636";
}
.van-icon-information:before {
  content: "\e6aa";
}
.van-icon-gerenzhongxin:before {
  content: "\e651";
}
.van-icon-dingdan:before {
  content: "\e669";
}
.van-icon-chushi:before {
  content: "\e642";
}
.van-icon-xiaoxi:before {
  content: "\e600";
}
.van-icon-jiezhang:before {
  content: "\e601";
}
.van-icon-navicon-xtcp:before {
  content: "\e640";
}
.van-icon-cailan:before {
  content: "\e64e";
}
.van-icon-airudiantubiaohuizhi-zhuanqu_meishicaipu:before {
  content: "\e6a2";
}
.van-icon-search:before {
  content: "\e602" !important;
}
.van-icon-clear:before {
  content: "\e604" !important;
}
</style>

