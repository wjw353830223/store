<template>
	<div class="m-l-50 m-t-30 w-500">
		<el-form ref="form" :model="form" :rules="rules" label-width="130px">
			<el-form-item label="餐桌编号" prop="name">
				<el-input v-model.trim="form.name" class="h-40 w-200" :maxlength=20></el-input>
			</el-form-item>
			<el-form-item label="座位数量" prop="seats">
				<el-input v-model.trim="form.seats" class="h-40 w-200" :maxlength=11></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="add('form')" :loading="isLoading">提交</el-button>
				<el-button @click="goback()">返回</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<style type="text/css">
	.form-checkbox:first-child{
		margin-left: 15px;
	}
  .el-loading-mask{
    display: none;
  }
</style>
<script>
  import http from '../../../assets/js/http'
  import fomrMixin from '../../../assets/js/form_com'

  export default {
    data() {
      return {
        isLoading: false,
        form: {
          name: '',
          seats: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入餐桌编号' }
          ],
          seats: [
            { required: true, message: '请输入座位数量' }
          ]
        }
      }
    },
    methods: {
      add(form) {
        this.isLoading = !this.isLoading
        this.apiPost('order/tables', this.form).then((res) => {
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
    },
    created() {
      
    },
    mixins: [http, fomrMixin]
  }
</script>