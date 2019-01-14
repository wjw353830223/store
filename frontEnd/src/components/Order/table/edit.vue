<template>
	<div class="m-l-50 m-t-30 w-500">
		<el-form ref="form" :model="form" :rules="rules" label-width="130px">
			<el-form-item label="餐桌编号" prop="name">
				<el-input v-model.trim="form.name" class="h-40 w-200" :maxlength=20 :disabled="true"></el-input>
			</el-form-item>
			<el-form-item label="座位数量"  prop="seats">
				<el-input v-model="form.seats" class="h-40 w-200" :maxlength=11></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="add()" :loading="isLoading">提交</el-button>
				<el-button @click="goback()">返回</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<style>
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
        id: null,
        form: {
          name: '',
          seats: '',
          structure_id: null
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
            { required: true, message: '请选择用户所属组织架构' }
          ]
        }
      }
    },
    methods: {
      add() {
        this.$refs.form.validate((pass) => {
          this.isLoading = !this.isLoading
            this.apiPut('order/tables/', this.id, this.form).then((res) => {
              this.handelResponse(res, (data) => {
                _g.toastMsg('success', '添加成功')
                setTimeout(() => {
                  this.goback()
                }, 1500)
              }, () => {
                this.isLoading = !this.isLoading
              })
            })
        })
      },
      getCompleteData() {
        this.apiGet('order/tables/' + this.id).then((res) => {
          this.handelResponse(res, (data) => {
            this.form.name = data.name
            this.form.seats = data.seats
            this.form.structure_id = data.structure_id
          })
        })
      }
    },
    created() {
      this.id = this.$route.params.id
      this.getCompleteData()
    },
    mixins: [http, fomrMixin]
  }
</script>