import Login from './components/Account/Login.vue'
import refresh from './components/refresh.vue'
import Home from './components/Home.vue'
import menuList from './components/Administrative/system/menu/list.vue'
import menuAdd from './components/Administrative/system/menu/add.vue'
import menuEdit from './components/Administrative/system/menu/edit.vue'
import systemConfig from './components/Administrative/system/config/add.vue'
import ruleList from './components/Administrative/system/rule/list.vue'
import ruleAdd from './components/Administrative/system/rule/add.vue'
import ruleEdit from './components/Administrative/system/rule/edit.vue'
import positionList from './components/Administrative/structures/position/list.vue'
import positionAdd from './components/Administrative/structures/position/add.vue'
import positionEdit from './components/Administrative/structures/position/edit.vue'
import structuresList from './components/Administrative/structures/structures/list.vue'
import structuresAdd from './components/Administrative/structures/structures/add.vue'
import structuresEdit from './components/Administrative/structures/structures/edit.vue'
import groupsList from './components/Administrative/structures/groups/list.vue'
import groupsAdd from './components/Administrative/structures/groups/add.vue'
import groupsEdit from './components/Administrative/structures/groups/edit.vue'
import usersList from './components/Administrative/personnel/users/list.vue'
import usersAdd from './components/Administrative/personnel/users/add.vue'
import usersEdit from './components/Administrative/personnel/users/edit.vue'
import tablesList from './components/Order/table/list.vue'
import tablesAdd from './components/Order/table/add.vue'
import tablesEdit from './components/Order/table/edit.vue'
import menuCategoriesList from './components/Order/menu/category/list.vue'
import menuCategoriesAdd from './components/Order/menu/category/add.vue'
import menuCategoriesEdit from './components/Order/menu/category/edit.vue'
import menusList from './components/Order/menu/menu/list.vue'
import menusAdd from './components/Order/menu/menu/add.vue'
import menusEdit from './components/Order/menu/menu/edit.vue'
import backupRestore from './components/Administrative/system/backup/restore.vue'
import adPositionList from './components/Order/advert/positions/list.vue'
import adPositionAdd from './components/Order/advert/positions/add.vue'
import adPositionEdit from './components/Order/advert/positions/edit.vue'
import advertList from './components/Order/advert/advert/list.vue'
import advertAdd from './components/Order/advert/advert/add.vue'
import advertEdit from './components/Order/advert/advert/edit.vue'
/**
 * meta参数解析
 * hideLeft: 是否隐藏左侧菜单，单页菜单为true
 * module: 菜单所属模块
 * menu: 所属菜单，用于判断三级菜单是否显示高亮，如菜单列表、添加菜单、编辑菜单都是'menu'，用户列表、添加用户、编辑用户都是'user'，如此类推
 */

const routes = [
  { path: '/', component: Login, name: 'Login' },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/refresh', component: refresh, name: 'refresh' }
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: 'menu/list', component: menuList, name: 'menuList', meta: { hideLeft: false, module: 'Administrative', menu: 'menu' }},
      { path: 'menu/add', component: menuAdd, name: 'menuAdd', meta: { hideLeft: false, module: 'Administrative', menu: 'menu' }},
      { path: 'menu/edit/:id', component: menuEdit, name: 'menuEdit', meta: { hideLeft: false, module: 'Administrative', menu: 'menu' }}
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: 'config/add', component: systemConfig, name: 'systemConfig', meta: { hideLeft: false, module: 'Administrative', menu: 'systemConfig' }}
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: 'backup/restore', component: backupRestore, name: 'backupRestore', meta: { hideLeft: false, module: 'Administrative', menu: 'backupRestore' }}
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: 'rule/list', component: ruleList, name: 'ruleList', meta: { hideLeft: false, module: 'Administrative', menu: 'rule' }},
      { path: 'rule/add', component: ruleAdd, name: 'ruleAdd', meta: { hideLeft: false, module: 'Administrative', menu: 'rule' }},
      { path: 'rule/edit/:id', component: ruleEdit, name: 'ruleEdit', meta: { hideLeft: false, module: 'Administrative', menu: 'rule' }}
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: 'position/list', component: positionList, name: 'positionList', meta: { hideLeft: false, module: 'Administrative', menu: 'position' }},
      { path: 'position/add', component: positionAdd, name: 'positionAdd', meta: { hideLeft: false, module: 'Administrative', menu: 'position' }},
      { path: 'position/edit/:id', component: positionEdit, name: 'positionEdit', meta: { hideLeft: false, module: 'Administrative', menu: 'position' }}
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: 'structures/list', component: structuresList, name: 'structuresList', meta: { hideLeft: false, module: 'Administrative', menu: 'structures' }},
      { path: 'structures/add', component: structuresAdd, name: 'structuresAdd', meta: { hideLeft: false, module: 'Administrative', menu: 'structures' }},
      { path: 'structures/edit/:id', component: structuresEdit, name: 'structuresEdit', meta: { hideLeft: false, module: 'Administrative', menu: 'structures' }}
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: 'groups/list', component: groupsList, name: 'groupsList', meta: { hideLeft: false, module: 'Administrative', menu: 'groups' }},
      { path: 'groups/add', component: groupsAdd, name: 'groupsAdd', meta: { hideLeft: false, module: 'Administrative', menu: 'groups' }},
      { path: 'groups/edit/:id', component: groupsEdit, name: 'groupsEdit', meta: { hideLeft: false, module: 'Administrative', menu: 'groups' }}
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: 'users/list', component: usersList, name: 'usersList', meta: { hideLeft: false, module: 'Administrative', menu: 'users' }},
      { path: 'users/add', component: usersAdd, name: 'usersAdd', meta: { hideLeft: false, module: 'Administrative', menu: 'users' }},
      { path: 'users/edit/:id', component: usersEdit, name: 'usersEdit', meta: { hideLeft: false, module: 'Administrative', menu: 'users' }}
    ]
  },
  {
    path: '/order',
    component: Home,
    children: [
      { path: 'tables/list', component: tablesList, name: 'tablesList', meta: { hideLeft: false, module: 'Order', menu: 'tables' }},
      { path: 'tables/add', component: tablesAdd, name: 'tablesAdd', meta: { hideLeft: false, module: 'Order', menu: 'tables' }},
      { path: 'table/edit/:id', component: tablesEdit, name: 'tablesEdit', meta: { hideLeft: false, module: 'Order', menu: 'tables' }}
    ]
  },
  {
    path: '/order',
    component: Home,
    children: [
      { path: 'menuCategory/list', component: menuCategoriesList, name: 'menuCategoriesList', meta: { hideLeft: false, module: 'Order', menu: 'menuCategories' }},
      { path: 'menuCategory/add', component: menuCategoriesAdd, name: 'menuCategoriesAdd', meta: { hideLeft: false, module: 'Order', menu: 'menuCategories' }},
      { path: 'menuCategory/edit/:id', component: menuCategoriesEdit, name: 'menuCategoriesEdit', meta: { hideLeft: false, module: 'Order', menu: 'menuCategories' }}
    ]
  },
  {
    path: '/order',
    component: Home,
    children: [
      { path: 'menus/list', component: menusList, name: 'menusList', meta: { hideLeft: false, module: 'Order', menu: 'menus' }},
      { path: 'menus/add', component: menusAdd, name: 'menusAdd', meta: { hideLeft: false, module: 'Order', menu: 'menus' }},
      { path: 'menus/edit/:id', component: menusEdit, name: 'menusEdit', meta: { hideLeft: false, module: 'Order', menu: 'menus' }}
    ]
  },
  {
    path: '/order',
    component: Home,
    children: [
      { path: 'adPosition/list', component: adPositionList, name: 'adPositionList', meta: { hideLeft: false, module: 'Order', menu: 'adPosition' }},
      { path: 'adPosition/add', component: adPositionAdd, name: 'adPositionAdd', meta: { hideLeft: false, module: 'Order', menu: 'adPosition' }},
      { path: 'adPosition/edit/:id', component: adPositionEdit, name: 'adPositionEdit', meta: { hideLeft: false, module: 'Order', menu: 'adPosition' }}
    ]
  },
  {
    path: '/order',
    component: Home,
    children: [
      { path: 'advert/list', component: advertList, name: 'advertList', meta: { hideLeft: false, module: 'Order', menu: 'advert' }},
      { path: 'advert/add', component: advertAdd, name: 'advertAdd', meta: { hideLeft: false, module: 'Order', menu: 'advert' }},
      { path: 'advert/edit/:id', component: advertEdit, name: 'advertEdit', meta: { hideLeft: false, module: 'Order', menu: 'advert' }}
    ]
  }
]
export default routes
