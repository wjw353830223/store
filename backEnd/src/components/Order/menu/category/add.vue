<template>
	<div class="m-l-50 m-t-30 w-900">
		<el-form ref="form" :model="form" :rules="rules" label-width="130px">
			<el-form-item label="分类名称" prop="name">
				<el-input v-model.trim="form.name" class="h-40 w-200"></el-input>
			</el-form-item>
			<el-form-item label="上级分类" prop="pid">
        <el-select v-model="form.pid" placeholder="上级分类" class="w-200">
          <el-option v-for="(item,index) in options" :label="item.name" :value="item.id" :key='index'></el-option>
        </el-select>
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

  export default {
    data() {
      return {
        isLoading: false,
        form: {
          name: '',
          pid: ''
        },
        users: [],
        options: [{ pid: 0, name: '无' }],
        rules: {
          name: [
            { required: true, message: '请输入分类名称', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      add(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            this.isLoading = !this.isLoading
            this.apiPost('order/category', this.form).then((res) => {
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
      getCategories() {
        this.apiGet('order/category').then((res) => {
          this.handelResponse(res, (data) => {
            this.options = this.options.concat(data)
          })
        })
      }
    },
    created() {
      this.getCategories()
    },
    mixins: [http, fomrMixin]
  }
</script>