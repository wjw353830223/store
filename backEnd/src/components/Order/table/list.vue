<template>
	<div>
		<div class="m-b-20 ovf-hd">
			<div class="fl" v-show="addShow">
				<router-link class="btn-link-large add-btn" to="add">
					<i class="el-icon-plus"></i>&nbsp;&nbsp;添加餐桌
				</router-link>
			</div>
			<div class="fl w-200 m-l-30">
				<el-input placeholder="请输入餐桌编号" v-model="keywords">
					<el-button slot="append" icon="search" @click="search()"></el-button>
				</el-input>
			</div>
		</div>
		<el-table
		:data="tableData"
		style="width: 100%"
		@selection-change="selectItem">
			<el-table-column
			type="selection"
			width="100">
			</el-table-column>
      <el-table-column
			label="编号"
			prop="name"
			width="400">
			</el-table-column>
			<el-table-column
			label="状态"
			width="900">
        <template scope="scope">
          <div>
            {{ scope.row.status | status }}
          </div>
        </template>
			</el-table-column>
			<el-table-column
			label="操作"
			width="250">
        <template scope="scope">
          <div>
            <span>
              <router-link :to="{ name: 'tablesEdit', params: { id: scope.row.id }}" class="el-button el-button--primary el-button--small">
            编辑
              </router-link>
            </span>
            <span>
              <el-button size="small" type="danger" @click="confirmDelete(scope.row)">删除</el-button>
            </span>
            <span>
              <el-button size="small" type="primary" @click="qrcode(scope.row)">二维码</el-button>
            </span>
          </div>
        </template>
			</el-table-column>
		</el-table>
		<div class="pos-rel p-t-20">
			<btnGroup :selectedData="multipleSelection" :type="'order/tables'"></btnGroup>
			<div class="block pages">
				<el-pagination
				@current-change="handleCurrentChange"
				layout="prev, pager, next"
				:page-size="limit"
				:current-page="currentPage"
				:total="dataCount">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
  import btnGroup from '../../Common/btn-group.vue'
  import http from '../../../assets/js/http'

  export default {
    data() {
      return {
        tableData: [],
        dataCount: null,
        currentPage: null,
        keywords: '',
        multipleSelection: [],
        limit: 15
      }
    },
    methods: {
      search() {
        router.push({ path: this.$route.path, query: { keywords: this.keywords, page: 1 }})
      },
      selectItem(val) {
        this.multipleSelection = val
      },
      handleCurrentChange(page) {
        router.push({ path: this.$route.path, query: { keywords: this.keywords, page: page }})
      },
      confirmDelete(item) {
        this.$confirm('确认删除该餐桌?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          _g.openGlobalLoading()
          this.apiDelete('order/tables/', item.id).then((res) => {
            _g.closeGlobalLoading()
            this.handelResponse(res, (data) => {
              _g.toastMsg('success', '删除成功')
              setTimeout(() => {
                _g.shallowRefresh(this.$route.name)
              }, 1500)
            })
          })
        }).catch(() => {
          // catch error
        })
      },
      qrcode(item) {
        this.apiGet('order/tables/qrcode', {
          params:{
            id: item.id
          },
          responseType:'arraybuffer'
        }).then((res) => {
        let href='data:image/png;base64,' + btoa(new Uint8Array(res).reduce((data, byte) => data + String.fromCharCode(byte), ''))
        let alink = document.createElement("a");
        alink.href = href;
        alink.download = item.name
        alink.click();
      })
      },
      getAllTables() {
        this.loading = true
        const data = {
          params: {
            keywords: this.keywords,
            page: this.currentPage,
            limit: this.limit
          }
        }
        this.apiGet('order/tables', data).then((res) => {
          this.handelResponse(res, (data) => {
            this.tableData = data.list
            this.dataCount = data.dataCount
          })
        })
      },
      getCurrentPage() {
        let data = this.$route.query
        if (data) {
          if (data.page) {
            this.currentPage = parseInt(data.page)
          } else {
            this.currentPage = 1
          }
        }
      },
      getKeywords() {
        let data = this.$route.query
        if (data) {
          if (data.keywords) {
            this.keywords = data.keywords
          } else {
            this.keywords = ''
          }
        }
      },
      init() {
        this.getKeywords()
        this.getCurrentPage()
        this.getAllTables()
      }
    },
    created() {
      this.init()
    },
    computed: {
      addShow() {
        return _g.getHasRule('users-save')
      },
      editShow() {
        return _g.getHasRule('users-update')
      },
      deleteShow() {
        return _g.getHasRule('users-delete')
      }
    },
    watch: {
      '$route' (to, from) {
        this.init()
      }
    },
    components: {
      btnGroup
    },
    mixins: [http]
  }
</script>