<template>
  <div class="m-l-50 m-t-30 w-900">
    <el-form ref="form" :model="form" :rules="rules" label-width="130px">
      <el-form-item label="广告位名称" prop="name">
				<el-input v-model.trim="form.name" class="h-40 w-200"></el-input>
			</el-form-item>
      <el-form-item label="广告位介绍" prop="introduction">
        <el-input v-model.trim="form.introduction"  type="textarea" :rows="3"></el-input>
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

  export default {
    data() {
      return {
        isLoading: false,
        form: {
          id: null,
          name: '',
          introduction: null
        },
        rules: {
          name: [
            { required: true, message: '请输入广告位名称', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      edit(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            this.isLoading = !this.isLoading
            this.apiPut('order/positions/', this.form.id, this.form).then((res) => {
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
      getPositionInfo() {
        this.form.id = this.$route.params.id
        this.apiGet('order/positions/' + this.form.id).then((res) => {
          this.handelResponse(res, (data) => {
            this.form.id = data.id
            this.form.name = data.name
            this.form.introduction = data.introduction
          })
        })
      }
    },
    created() {
      this.getPositionInfo()
    },
    mixins: [http, fomrMixin]
  }
</script>