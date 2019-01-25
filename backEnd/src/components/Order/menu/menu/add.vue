<template>
	<div class="m-l-50 m-t-30 w-900">
		<el-form ref="form" :model="form" :rules="rules" label-width="130px">
      <el-form-item label="菜品名" prop="name" >
        <el-input v-model.trim="form.name" class="h-40 w-200" ></el-input>
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
      <el-form-item label="规格属性">
        <el-input v-model.trim="specName" class="h-40 w-200" placeholder="输入规格名称"></el-input>
        <el-button type="text" @click="addSpecName" style='margin-left:20px;'>新增</el-button>
      </el-form-item>
      <el-form-item 
        v-for="(item, index) in attributions"
        :label="item.specName"
        :key="index"
        :prop="item.specName"
      >
        <el-checkbox-group v-model="item.specValueChecked" @change="handleCheckedValueChange" class="h-40 w-800">
          <el-checkbox v-for="(item1,index1) in item.specValue" :label="item1" :key="index1">{{item1}}</el-checkbox>
          <el-button type="text" style='margin-left:100px;' v-if="item.specValue.length>0" @click="deleteSpec(index)">删除{{item.specName}}</el-button>
          <el-button type="text" @click="addSpecValue(index)">添加{{item.specName}}</el-button>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item v-if="sku.length>0">
        <el-table
          :data="sku"
          style="width: 100%">
          <el-table-column v-for="(item,index) in sku[0].specName" :key='index'
            :label="item"
            width="80"
          >
            <template slot-scope="scope">
              <span >{{ scope.row.specValue[index] }}</span>
            </template>
          </el-table-column>
          <el-table-column label="价格(分)">
            <template slot-scope="scope">
              <el-input v-model="scope.row.price" placeholder="输入价格"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="优惠价(分)">
            <template slot-scope="scope">
              <el-input v-model="scope.row.preferential_price" placeholder="输入优惠价"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
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
        attributions:[],
        specName:null,
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
          status:1,
          recommend:0,
          preferential_price: 0,
          postSpec:[]
        },
        options: [{ pid: 0, name: '无' }],
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
      handleDelete(index, row) {
        this.sku.splice(index,1)
      },
      addSpecName(){
        if(this.specName===null){
          this.$message.error('规格名称不能为空！');
          return false
        }
        this.attributions.push({
          specName:this.specName,
          specValue:[],
          specValueChecked:[]
        })
        this.specName=null
      },
      addSpecValue(index){
        let _self=this
        let spec=this.attributions[index]
        this.$prompt('请输入'+spec.specName, '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          _self.attributions[index].specValue.push(value)
          _self.attributions[index].specValueChecked.push(value)
        }).catch(() => {
                 
        });
      },
      deleteSpec(index){
        let _self=this;
        this.$confirm('确定删除该规格吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          _self.attributions.splice(index,1)
        }).catch(() => {
                  
        });
      },
      handleCheckedValueChange(value){

      },
      ready (editorInstance) {
       
      },
      parseSku(){
        let postSpec=[]
        if(this.sku.length>0){
          let attributions =  this.sku.filter(function(item){
            return item.price > 0
          })
          if(attributions.length > 0){
            postSpec=attributions
          }
        }
        return postSpec
      },
      add(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            this.form.attributions=this.attributions
            this.form.postSpec=this.parseSku()
            this.isLoading = !this.isLoading
            this.apiPost('order/menus', this.form).then((res) => {
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
      //对象数组笛卡尔积
      multiCartesian(sku,newAttr) {
        let ret=[];
        sku=sku.concat([])
        for(var m=0;m<sku.length;m++){
          if(newAttr.specValueChecked.length>0){
            let specName=sku[m].specName.concat([])
            let tempSpecName = specName.concat([])
            let specValue=sku[m].specValue.concat([])
            let tempSpecValue = specValue.concat([])
            for(var j=0;j<newAttr.specValueChecked.length;j++){
              specName = tempSpecName.concat([])
              specValue = tempSpecValue.concat([])
              specName.push(newAttr.specName)
              specValue.push(newAttr.specValueChecked[j])
              ret.push({
                specName:specName,
                specValue:specValue
              })
            }
          }else{
            ret = sku
          }
        }
        return ret
      }
    },
    created() {
      this.getMenuCategory()
      this.uploadUrl= window.HOST + 'order/menus/upload'
      this.config.serverUrl = window.HOST + 'admin/ueditor/upload'
    },
    computed: {
      currentImage() {
        if(this.form.image){
          return window.HOST + this.form.image
        }
        return null
      },
      sku() {
        let attributions=JSON.parse(JSON.stringify(this.attributions))
        let sku=[];
        if(attributions.length >= 1){
          for(var i=0;i<attributions[0].specValueChecked.length;i++){
            sku.push({
              specName:[attributions[0].specName],
              specValue:[attributions[0].specValueChecked[i]]
            })
          }
          if(attributions.length > 1){
            for(var i=1; i< attributions.length; i++){
              sku = this.multiCartesian(sku, attributions[i])
            }
          } 
        }
        sku.map(function(item){
          item.price=null
          item.preferential_price=null
        })
        return sku;
      }
    },
    components: {
      'vue-ueditor-wrap':VueUeditorWrap
    },
    mixins: [http, fomrMixin]
  }
</script>