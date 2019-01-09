<template>
  <div id='left-menu'>
    <el-menu
      v-bind:default-active="defaultActive"
      background-color="#324057"
      text-color="#fff"
      active-text-color="#ffd04b"
      v-bind:unique-opened='uniqueOpened'
       v-bind:collapse-transition='collapseTransition'
    >
      <el-submenu  v-for="(secMenu,index) in menuData" :key='index' :index="index+'0'">
        <template slot="title">
          <i class='iconfont' :class="secMenu.icon"></i>
          <span>{{secMenu.title}}</span>
        </template>
        <el-menu-item v-for="(item,index1) in secMenu.child" :key='index1' :index="index+'-'+index1" @click="routerChange(item)">{{item.title}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: ['menuData', 'menu'],
  data() {
    return {
      uniqueOpened: true,
      collapseTransition: true
    }
  },
  methods: {
    routerChange(item) 	{
      // 与当前页面路由相等则刷新页面
      if (item.url != this.$route.path) {
        router.push(item.url)
      } else {
        _g.shallowRefresh(this.$route.name)
      }
    }
  },
  computed: {
    defaultActive() {
      let active = '0-0'
      let currentPath = this.$route.path
      this.$props.menuData.map(function(item, index) {
          item.child.map(function(item1, index1){
              if (item1.url == currentPath){
                active = index + '-' + index1
                return active;
              }
          })
      })
      return active
    }
  }
}
</script>
<style>
#left-menu .el-menu{
  border-right: 0;
}
#left-menu .el-menu .iconfont{
  color:#fff
}
</style>
