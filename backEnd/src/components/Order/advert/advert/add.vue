<template>
	<div class="m-l-50 m-t-30 w-900">
		<el-form ref="form" :model="form" :rules="rules" label-width="130px">
      <el-form-item label="广告名称" prop="title" >
        <el-input v-model.trim="form.title" class="h-40 w-200" ></el-input>
      </el-form-item>
      <el-form-item label="所属广告位" prop="pid">
        <el-select v-model="form.pid" placeholder="所属广告位" class="w-200">
          <el-option v-for="(item,index) in options" :label="item.name" :value="item.id" :key='index'></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="排序" prop="sort">
        <el-input v-model.number="form.sort" class="h-40 w-200"></el-input>
      </el-form-item>
      <el-form-item label="广告图上传" prop="image">
        <el-upload
          :action="uploadUrl"
          name='image'
          type="drag"
          :headers="uploadHeaders"
          :show-file-list="false"
          :on-success="handleUploadSuccess"
          :with-credentials='withCredentials'
          >
          <img v-if="currentImage" :src="currentImage" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add('form')" :loading="isLoading">提交</el-button>
        <el-button @click="goback()">返回</el-button>
      </el-form-item>
    </el-form>
	</div>
</template>
<script>
  import http from '../../../../assets/js/http'
  import fomrMixin from '../../../../assets/js/form_com'
  import VueUeditorWrap from 'vue-ueditor-wrap'
  export default {
    data() {
      return {
        isLoading: false,
        withCredentials:true,
        form: {
          title: '',
          image: null,
          pid: null,
          sort:0
        },
        options: [],
        uploadUrl:null,
        uploadHeaders:{
          authKey:Lockr.get('authKey'),
          sessionId:Lockr.get('sessionId')
        },
        rules: {
          title: [
            { required: true, message: '请输入广告名称', trigger: 'blur' }
          ],
          pid: [
            { required: true, message: '必须选择广告位' }
          ]
        }
      }
    },
    methods: {
      handleDelete(index, row) {
        this.sku.splice(index,1)
      },
      add(form) {
        if(!this.form.image){
          _g.toastMsg('warning', '广告图片必须上传！')
          return false
        }
        this.$refs[form].validate((valid) => {
          if (valid) {
            this.isLoading = !this.isLoading
            this.apiPost('order/advert', this.form).then((res) => {
              this.handelResponse(res, (data) => {
                _g.toastMsg('success', '添加成功')
                setTimeout(() => {
                  this.goback()
                }, 1500)
              }, () => {
                this.isLoading = !this.isLoading
              })
            })
          }
        })
      },
      handleUploadSuccess(response, file, fileList) {
        this.handelResponse(response, (data) => {
          this.form.image = data
        })
      },
      getPositions() {
        this.apiGet('order/positions').then((res) => {
          this.handelResponse(res, (data) => {
            _(data).forEach((ret) => {
              ret.id = ret.id.toString()
            })
            this.options = this.options.concat(data)
          })
        })
      },
    },
    created() {
      this.getPositions()
      this.uploadUrl= window.HOST + 'order/advert/upload'
    },
    computed: {
      currentImage() {
        if(this.form.image){
          return window.HOST + this.form.image
        }
        return null
      }
    },
    components: {
      
    },
    mixins: [http, fomrMixin]
  }
</script>