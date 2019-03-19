<template>
	<div class="m-l-50 m-t-30 w-900">
    <el-container>
      <el-aside width="310px">
        <el-steps direction="vertical" :active="active">
          <el-step v-for="(item,index) in steps" :key="index" :title='item.title' :description='item.description' @click.native="changeStep(item.step)"></el-step>
        </el-steps>
      </el-aside>
      <el-main>
        <div v-if="currentActive==1">
          <label for="">菜品名称：</label>
          <el-input v-model.trim="form.name" class="h-40 w-200" placeholder="菜品名称"></el-input>
        </div>
        <div v-if="currentActive==2">
          <label for="">所属分类：</label>
          <el-select v-model="form.category_id" placeholder="所属分类" class="w-200">
            <el-option v-for="(item,index) in options" :label="item.name" :value="item.id" :key='index'></el-option>
          </el-select>
        </div>
        <div v-if="currentActive==3">
          <label for="">价格：</label>
          <el-input v-model.number="form.price" class="h-40 w-200" placeholder="价格">
            <template slot="append">分</template>
          </el-input>
        </div>
        <div v-if="currentActive==4">
          <label for="">优惠价：</label>
          <el-input v-model.number="form.preferential_price" placeholder="优惠价" class="h-40 w-200" >
            <template slot="append">分</template>
          </el-input>
        </div>
        <div v-if="currentActive==5">
          <label for="">初始销量：</label>
          <el-input v-model.number="form.sale_nums" class="h-40 w-200" placeholder="销量"></el-input>
        </div>
        <div v-if="currentActive==6">
          <label for="">推荐指数：</label>
          <el-rate v-model="form.recommend" class="h-40 w-200"></el-rate>
        </div>
        <div v-if="currentActive==7">
          <label for="">菜品展示图：</label>
          <el-upload
            :action="uploadUrl"
            class="avatar-uploader"
            name='image'
            drag
            :headers="uploadHeaders"
            :show-file-list="false"
            :on-success="handleUploadSuccess"
            :with-credentials='withCredentials'
            >
            <img v-if="currentImage" :src="currentImage" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div v-show="currentActive==8">
          <label for="">菜品简介：</label>
          <el-input v-model.trim="form.introduction" placeholder="菜品简介" type="textarea" :rows="3"></el-input>
        </div>
        <div v-if="currentActive==9">
          <label for="">菜品详情：</label>
          <vue-ueditor-wrap ref="ueditor" v-model="form.detail" :destroy="false" :config="config" @ready="ready"></vue-ueditor-wrap>
        </div>
        <div v-show="currentActive==10">
          <label for="">菜品规格属性：</label>
          <el-input v-model.trim="specName" class="h-40 w-200" placeholder="输入规格名称"></el-input>
          <el-button type="text" @click="addSpecName" style='margin-left:20px;'>新增</el-button>
          <div 
          v-for="(item, index) in attributions"
          :key="index"
          >
            <el-checkbox-group v-model="item.specValueChecked" @change="handleCheckedValueChange" class="h-40 w-800">
              <el-checkbox v-for="(item1,index1) in item.specValue" :label="item1" :key="index1">{{item1}}</el-checkbox>
              <el-button type="text" style='margin-left:100px;' v-if="item.specValue.length>0" @click="deleteSpec(index)">删除{{item.specName}}</el-button>
              <el-button type="text" @click="addSpecValue(index)">添加{{item.specName}}</el-button>
            </el-checkbox-group>
          </div>
          <el-table
            v-if="sku.length>0"
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
            <el-table-column label="图片">
              <template slot-scope="scope">
                <el-upload
                  :action="uploadSpecUrl+'?index='+scope.$index"
                  name='imageSpec'
                  :headers="uploadHeaders"
                  :show-file-list="false"
                  :on-success="handleUploadSpecSuccess"
                  :with-credentials='withCredentials'
                >
                  <img v-if="scope.row.image" :src="host+'/'+scope.row.image" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
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
        </div>
        <div>
          <el-button type="text" @click="next" style='margin-left:20px;' :loading="isLoading">下一步</el-button>
        </div>
      </el-main>
    </el-container>
	</div>
</template>
<script>
  import http from '../../../../assets/js/http'
  import VueUeditorWrap from 'vue-ueditor-wrap'
  export default {
    data() {
      return {
        host:window.HOST,
        attributions:[],
        specName:null,
        isLoading: false,
        withCredentials:true,
        active:1,
        currentActive:1,
        uploadUrl:null,
        uploadSpecUrl:null,
        uploadHeaders:{
          authKey:Lockr.get('authKey'),
          sessionId:Lockr.get('sessionId')
        },
        options: [{ pid: 0, name: '无' }],
        steps:[
          {
            step:1,
            title:'填入菜品名称',
            description:'',
            require:true,
            tag:'name'
          },
          {
            step:2,
            title:'选择菜品分类',
            description:'',
            require:true,
            tag:'category_id'
          },
          {
            step:3,
            title:'输入价格',
            description:'单位：分',
            require:true,
            tag:'price'
          },
          {
            step:4,
            title:'输入优惠价格',
            description:'单位：分',
            require:false,
            tag:'preferential_price'
          },
          {
            step:5,
            title:'输入初始销量',
            description:'',
            require:false,
            tag:'sale_nums'
          },
          {
            step:6,
            title:'选择推荐值',
            description:'',
            require:false,
            tag:'recommend'
          },
          {
            step:7,
            title:'上传菜品图片',
            description:'商品详情页展示用，为了美观，请保证上传的图片尺寸符合规范。宽：480像素 高：225像素  图片大小小于500kb',
            require:true,
            tag:'image'
          },
          {
            step:8,
            title:'填写菜品简介',
            description:'菜品的简单介绍',
            require:false,
            tag:'introduction'
          },
          {
            step:9,
            title:'编辑菜品详情',
            description:'菜品的详细介绍，可编辑精美的菜品展示页面',
            require:false,
            tag:'detail'
          },
          {
            step:10,
            title:'添加规格属性',
            description:'给菜品增加规格属性，例如 分量：大份、中份、小份 口味：酸、甜、苦、辣... ',
            require:false,
            tag:'postSpec'
          }
        ],
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
        specName:null,
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
        },
        isLoading: false
      }
    },
    methods: {
      goback() {
        router.go(-1)
      },
      next(){
        let require = this.steps[this.currentActive-1].require
        let value = this.form[this.steps[this.currentActive-1].tag]
        if(require==true && !value){
          this.$message.error('该项是必填项！请重新填写！');
          return;
        }
        if(this.currentActive==this.active){
          this.currentActive = ++this.active
        }else{
          this.currentActive = this.active
        }
        if(this.active == 11){
          this.active = 10
          this.currentActive = this.active
          this.add()
        }
      },
      add() {
        if(this.attributions.length>0){
          let specImageChecked=[]
          first:
          for(let i=0;i<this.attributions[0].specValueChecked.length;i++){
            second:
            for(let j=0;j<this.sku.length;j++){
              third:
              for(let m=0;m<this.sku[j].specValue.length;m++){
                if(this.sku[j].specValue[m] == this.attributions[0].specValueChecked[i]){
                  specImageChecked.push(this.sku[j].image)
                  break second;
                }
              }
            }
          }
          this.attributions[0].specImageChecked=specImageChecked
        }
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
      handleUploadSuccess(response, file, fileList) {
        this.handelResponse(response, (data) => {
          this.form.image = data
        })
      },
      handleUploadSpecSuccess(response, file, fileList) {
        this.handelResponse(response, (data) => {
          this.sku[data.index].image=data.path
        })
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
      changeStep(step){
        if(this.active < step){
          this.$message.error('有未填写的步骤！请补充完整！');
          return;
        }
        this.currentActive=step
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
      this.uploadSpecUrl= window.HOST + 'order/menus/uploadSpec'
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
              specValue:[attributions[0].specValueChecked[i]],
              image:null
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
          item.image=null
        })
        return sku;
      }
    },
    components: {
      'vue-ueditor-wrap':VueUeditorWrap
    },
    mixins: [http]
  }
</script>
<style>
.el-form-item .el-table .el-upload img{
  height:60px;
}
.el-aside{
  height:900px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.el-table .el-upload img{
  height:60px;
}
</style>
