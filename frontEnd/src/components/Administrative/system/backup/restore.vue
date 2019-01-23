<template>
	<div class="m-l-50 m-t-30 w-500">
    <el-button type="primary" @click="backup()" :loading="isLoading">备份数据</el-button>
		<el-button type="primary" @click="restore()" :loading="isLoading">恢复数据</el-button>
	</div>
</template>
<script>
  import http from '../../../../assets/js/http'
  import progress from './progress.vue'
  export default {
    data() {
      return {
        percentage:0,
        msgBoxTitle:'',
      }
    },
    methods: {
      backup(){
        const h = this.$createElement;
        this.msgBoxTitle='确认备份数据库吗？'
        let _self=this
        this.$msgbox({
          title: this.msgBoxTitle,
          message: h('div', {
              style: {
                display: 'none'
              },
              ref: 'progress'
            }, [
            h(progress, {
              props: {
                percentage: this.percentage,
              }
            })
          ]),
          showClose:false,
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          closeOnClickModal:false,
          closeOnPressEscape:false,
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              _self.$refs.progress.style.display = 'block'
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              _self.show=true;
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          _self.$refs.progress.style.display = 'none'
          this.$message({
            type: 'success',
            message: '操作成功！'
          });
        });
      }
    },
    created() {
      
    },
    components: {
    
    },
    mixins: [http]
  }
</script>
<style>
.hide{
  display:none
}
</style>
