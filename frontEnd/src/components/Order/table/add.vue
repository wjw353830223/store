<template>
	<div class="m-l-50 m-t-30 w-500">
		<el-form ref="form" :model="form" :rules="rules" label-width="130px">
			<el-form-item label="餐桌编号" prop="name">
				<el-input v-model.trim="form.name" class="h-40 w-200" :maxlength=20></el-input>
			</el-form-item>
			<el-form-item label="座位数量" prop="seats">
				<el-input v-model.trim="form.seats" class="h-40 w-200" :maxlength=11></el-input>
			</el-form-item>
			<el-form-item label="所属部门" prop="structure_id">
				<el-select v-model="form.structure_id" placeholder="请选择部门" class="w-200">
					<el-option v-for="(item,index) in orgsOptions" :label="item.title" :value="item.id" :key='index'></el-option>
				</el-select>
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
          structure_id: null,
        },
        orgsOptions: [],
        rules: {
          name: [
            { required: true, message: '请输入餐桌编号' }
          ],
          seats: [
            { required: true, message: '请输入座位数量' }
          ],
          structure_id: [
            { required: true, message: '请选择所属餐馆' }
          ]
        }
      }
    },
    methods: {
      add(form) {
        this.$refs.form.validate((pass) => {
          if (pass) {
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
        })
      },
      getAllOrgs() {
        this.apiGet('admin/structures').then((res) => {
          this.handelResponse(res, (data) => {
            this.orgsOptions = data
          })
        })
      }
    },
    created() {
      this.getAllOrgs()
    },
    mixins: [http, fomrMixin]
  }
</script>