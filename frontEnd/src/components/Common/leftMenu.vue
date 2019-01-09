<template>
  <div id='left-menu'>
    <el-menu
      default-active="0-0"
      background-color="#324057"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened='true'
      collapse-transition='true'
    >
      <el-submenu  v-for="(secMenu,index) in menuData" :key='index' :index="index">
        <template slot="title">
          <i class='icon' v-bind:class="secMenu.icon"></i>
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
  }
}
</script>
<style>
#left-menu .el-menu{
  border-right: 0;
}
</style>
