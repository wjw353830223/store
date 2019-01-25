<template>
	<div class="m-l-50 m-t-30 w-500">
    <el-button type="primary" @click="backup">备份数据</el-button>
		<el-button type="primary" @click="restore">恢复数据</el-button>
    <el-dialog :title="msgBoxTitle" :visible.sync="centerDialogVisible"
      :close-on-click-modal='closeShow'
      :close-on-press-escape='closeShow'
      :show-close='closeShow'
      :before-close="beforeClose"
      certer
    >
      <el-progress type="circle" v-bind:percentage="percentage" v-if='isShow'></el-progress>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="sure" :loading="loading">{{sureButton}}</el-button>
      </span>
    </el-dialog>
	</div>
</template>
<script>
  import http from '../../../../assets/js/http'
  import socket from '../../../../assets/js/socket'
  import progress from './progress.vue'
import { setTimeout } from 'timers';
  export default {
    data() {
      return {
        percentage:0,
        centerDialogVisible:false,
        closeShow:false,
        loading:false,
        sureButton: '确 定',
        isShow:false,
        currentType:'backup'
      }
    },
    methods: {
      bindUid(data){
        let _self=this
        if(data.type=='init'){
          this.apiPost('admin/users/bind', {
            client_id: data.client_id
          }).then((res) => {
            this.handelResponse(res, (data) => {
              if(data!='success'){
                _self.$message({
                  type: 'warnning',
                  message: 'socket网络故障！'
                });
              }
            })
          })
        }
      },
      backup(){
        this.centerDialogVisible = true
        this.currentType = 'backup'
      },
      restore(){
        this.centerDialogVisible = true
        this.currentType = 'restore'
      },
      cancel(){
        this.centerDialogVisible = false
      },
      sure(){
        this.centerDialogVisible = true
        let _self=this
        this.isShow=true
        let params={
              type: 'backup'
            }
        let url='admin/backup'
        this.sureButton ='备份中...'
        if(this.currentType=='restore'){
          params.type='restore'
          this.sureButton ='恢复中...'
        }
        this.apiGet('admin/backup', {params}).then(function(res){
          _self.handelResponse(res, function(data){
            if(data=='success'){
              _self.loading = true
            }
          })
        })
      },
      websocketonmessage(e) {
        let data = JSON.parse(e.data)
        let _self=this
        if (this.callback != null && this.callback != "" && this.callback != undefined) {
          this.callback(data)
          this.callback = null
          return
        }
        if(data.type=='backup' || data.type=='restore'){
          this.percentage=data.percentage
          if(data.percentage==100){
            setTimeout(function(){
              _self.loading = false
              _self.isShow = false
              _self.sureButton = '确 定'
              _self.percentage = 0
              _self.centerDialogVisible = false
            },500)
          }
        }
      },
    },
    created() {
      this.sendSock(
        {
          type: 'pong',
          data: "heartbeat"
        },
        this.bindUid
      )
    },
    computed: {
      msgBoxTitle(){
        let title=''
        if(this.currentType=='backup'){
          title='确认备份用户数据吗？'
        }
        if(this.currentType=='restore'){
          title='确认恢复用户数据吗？'
        }
        return title
      }
    },
    components: {
    
    },
    mixins: [http, socket]
  }
</script>
