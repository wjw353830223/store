<template>
	<div>
		<div class="m-b-20">
			<router-link class="btn-link-large add-btn" to="add">
				<i class="el-icon-plus"></i>&nbsp;&nbsp;添加菜谱
			</router-link>
		</div>
		<el-table
		:data="tableData"
		style="width: 100%"
		@selection-change="selectItem">
			<el-table-column
			type="selection"
			width="50">
			</el-table-column>
			<el-table-column
			label="名称"
			prop="name">
			</el-table-column>
      <el-table-column
      label="分类"
      prop="category_name">
      </el-table-column>
      <el-table-column
      label="销量"
      prop="sale_nums">
      </el-table-column>
			<el-table-column
			label="状态"
      prop="status"
			width="100">
        <template scope="scope">
          <div>
            {{ scope.row.status | status }}
          </div>
        </template>
			</el-table-column>
			<el-table-column
			label="操作"
			width="200">
        <template scope="scope">
  				<div>
  					<span>
  						<router-link :to="{ name: 'menusEdit', params: { id: scope.row.id }}" class="el-button el-button--primary el-button--small">
  						编辑
  						</router-link>
  					</span>
  					<span>
  						<el-button
  						size="small"
  						type="danger"
  						@click="confirmDelete(scope.row)">
  						删除
  						</el-button>
  					</span>
  				</div>
        </template>
			</el-table-column>
		</el-table>
		<div class="pos-rel p-t-20">
			<btnGroup :selectedData="multipleSelection" :type="'order/menus'"></btnGroup>
		</div>
	</div>
</template>

<script>
  import btnGroup from '../../../Common/btn-group.vue'
  import http from '../../../../assets/js/http'

  export default {
    data() {
      return {
        tableData: [],
        multipleSelection: []
      }
    },
    methods: {
      selectItem(val) {
        this.multipleSelection = val
      },
      confirmDelete(item) {
        this.$confirm('确认删除该菜谱?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          _g.openGlobalLoading()
          this.apiDelete('order/menus/', item.id).then((res) => {
            _g.closeGlobalLoading()
            this.handelResponse(res, (data) => {
              _g.toastMsg('success', '删除成功')
              setTimeout(() => {
                _g.shallowRefresh(this.$route.name)
              }, 1500)
            })
          })
        }).catch(() => {
          // handle error
        })
      },
      getMenus() {
        this.apiGet('order/menus').then((res) => {
          this.handelResponse(res, (data) => {
            this.tableData = data.list
          })
        })
      }
    },
    created() {
      this.getMenus()
    },
    computed: {
      addShow() {
        return _g.getHasRule('structures-save')
      },
      editShow() {
        return _g.getHasRule('structures-update')
      },
      deleteShow() {
        return _g.getHasRule('structures-delete')
      }
    },
    components: {
      btnGroup
    },
    mixins: [http]
  }
</script>