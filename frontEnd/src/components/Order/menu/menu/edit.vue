<template>
  <div class="m-l-50 m-t-30 w-900">
    <el-form ref="form" :model="form" :rules="rules" label-width="130px">
      <el-form-item label="菜品名" prop="name" >
        <el-input v-model.trim="form.name" class="h-40 w-200" disabled></el-input>
      </el-form-item>
      <el-form-item label="所属分类" prop="category_id">
        <el-select v-model="form.category_id" placeholder="所属分类" class="w-200">
          <el-option v-for="(item,index) in options" :label="item.name" :value="item.id" :key='index'></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input v-model.number="form.price" placeholder="输入菜品价格，以分为单位" class="h-40 w-200"></el-input>
        <span>单位：分</span>
      </el-form-item>
      <el-form-item label="优惠价" prop="preferential_price">
        <el-input v-model.number="form.preferential_price" class="h-40 w-200" placeholder="输入菜品优惠价，以分为单位"></el-input>
        <span>单位：分</span>
      </el-form-item>
      <el-form-item label="销量" prop="sale_nums">
        <el-input v-model.number="form.sale_nums" class="h-40 w-200"></el-input>
      </el-form-item>
      <el-form-item label="推荐指数" prop="recommend">
        <el-rate v-model="form.recommend" class="h-40 w-200"></el-rate>
      </el-form-item>
      <el-form-item label="菜品图" prop="image">
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
      <el-form-item label="菜品简介" prop="introduction">
        <el-input v-model.trim="form.introduction"  type="textarea" :rows="3"></el-input>
      </el-form-item>
      <el-form-item label="菜品详情" prop="detail">
        <vue-ueditor-wrap ref="ueditor" v-model="form.detail" :destroy="false" :config="config" @ready="ready"></vue-ueditor-wrap>
      </el-form-item>
      <el-form-item label="规格属性" prop="attributions">
        <el-input v-model.trim="form.attributions" class="h-40 w-200"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="edit('form')" :loading="isLoading">提交</el-button>
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
          id: null,
          name: '',
          price: 0,
          image: null,
          detail: '',
          introduction: '',
          attributions: '',
          category_id: null,
          sale_nums:0,
          status:0,
          recommend:0,
          preferential_price: 0,
        },
        options: [{ id: '0', name: '无' }],
        uploadUrl:null,
        uploadHeaders:{
          authKey:Lockr.get('authKey'),
          sessionId:Lockr.get('sessionId')
        },
        rules: {
          name: [
            { required: true, message: '请输入菜品名称', trigger: 'blur' }
          ],
          price:[
            { required: true, message: '请输入菜品价格', trigger: 'blur' },
            { type: 'number', message: '菜品价格必须为数字，以分为单位填写' },
          ],
          preferential_price:[
            { type: 'number', message: '菜品价格必须为数字，以分为单位填写' },
          ],
          sale_nums:[
            { type: 'number', message: '请填入数字值' },
          ],
          category_id: [
            { required: true, message: '请选择菜品分类' }
          ]
        },
        config: {
          // 编辑器不自动被内容撑高
          autoHeightEnabled: true,
          // 初始容器高度
          initialFrameHeight: 240,
          // 初始容器宽度
          initialFrameWidth: '100%',
          // 上传文件接口
          serverUrl: null,
          // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
          // UEDITOR_HOME_URL: '/static/UEditor/'
          // 配合最新编译的资源文件，你可以实现添加自定义Request Headers,详情https://github.com/HaoChuan9421/ueditor/commits/dev-1.4.3.3
          headers: {
            authKey:Lockr.get('authKey'),
            sessionId:Lockr.get('sessionId')
          }
        }
      }
    },
    methods: {
      ready (editorInstance) {
       
      },
      edit(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            this.isLoading = !this.isLoading
            this.apiPut('order/menus/', this.form.id, this.form).then((res) => {
              this.handelResponse(res, (data) => {
                _g.toastMsg('success', '编辑成功')
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
      getMenuCategory() {
        this.apiGet('order/category').then((res) => {
          this.handelResponse(res, (data) => {
            _(data).forEach((ret) => {
              ret.id = ret.id.toString()
            })
            this.options = this.options.concat(data)
          })
        })
      },
      getMenuInfo() {
        this.form.id = this.$route.params.id
        this.apiGet('order/menus/' + this.form.id).then((res) => {
          this.handelResponse(res, (data) => {
            data.category_id = data.category_id.toString()
            data.recommend = parseInt(data.recommend )
            this.form=data
          })
        })
      }
    },
    created() {
      this.getMenuCategory()
      this.getMenuInfo()
      this.uploadUrl= window.HOST + 'order/menus/upload'
      this.config.serverUrl = window.HOST + 'admin/ueditor/upload'
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
      'vue-ueditor-wrap':VueUeditorWrap
    },
    mixins: [http, fomrMixin]
  }
</script>
<style>
.el-form-item__content{
  line-height: 0;
}
</style>
