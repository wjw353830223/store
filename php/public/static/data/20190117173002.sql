/*
MySQL Database Backup Tools
Server:127.0.0.1:3306
Database:vuethink
Data:2019-01-17 17:30:02
*/
SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for oa_admin_access
-- ----------------------------
DROP TABLE IF EXISTS `oa_admin_access`;
CREATE TABLE `oa_admin_access` (
  `user_id` int(11) DEFAULT NULL,
  `group_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of oa_admin_access
-- ----------------------------
INSERT INTO `oa_admin_access` (`user_id`,`group_id`) VALUES ('2','15');
INSERT INTO `oa_admin_access` (`user_id`,`group_id`) VALUES ('6','18');
INSERT INTO `oa_admin_access` (`user_id`,`group_id`) VALUES ('5','16');
INSERT INTO `oa_admin_access` (`user_id`,`group_id`) VALUES ('5','17');
INSERT INTO `oa_admin_access` (`user_id`,`group_id`) VALUES ('7','16');
INSERT INTO `oa_admin_access` (`user_id`,`group_id`) VALUES ('4','16');

-- ----------------------------
-- Table structure for oa_admin_group
-- ----------------------------
DROP TABLE IF EXISTS `oa_admin_group`;
CREATE TABLE `oa_admin_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `rules` varchar(4000) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  `remark` varchar(100) DEFAULT NULL,
  `status` tinyint(3) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of oa_admin_group
-- ----------------------------
INSERT INTO `oa_admin_group` (`id`,`title`,`rules`,`pid`,`remark`,`status`) VALUES ('16','店长','10,54,59,62,55,56,57,63,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,64,46,47,65,66','0','店长/老板','1');
INSERT INTO `oa_admin_group` (`id`,`title`,`rules`,`pid`,`remark`,`status`) VALUES ('17','厨师','59,10,62,54,55','','','1');
INSERT INTO `oa_admin_group` (`id`,`title`,`rules`,`pid`,`remark`,`status`) VALUES ('18','服务员','59,10,62,54,55','0','','1');

-- ----------------------------
-- Table structure for oa_admin_menu
-- ----------------------------
DROP TABLE IF EXISTS `oa_admin_menu`;
CREATE TABLE `oa_admin_menu` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '菜单ID',
  `pid` int(11) unsigned DEFAULT '0' COMMENT '上级菜单ID',
  `title` varchar(32) DEFAULT '' COMMENT '菜单名称',
  `url` varchar(127) DEFAULT '' COMMENT '链接地址',
  `icon` varchar(64) DEFAULT '' COMMENT '图标',
  `menu_type` tinyint(4) DEFAULT NULL COMMENT '菜单类型',
  `sort` tinyint(4) unsigned DEFAULT '0' COMMENT '排序（同级有效）',
  `status` tinyint(4) DEFAULT '1' COMMENT '状态',
  `rule_id` int(11) DEFAULT NULL COMMENT '权限id',
  `module` varchar(50) DEFAULT NULL,
  `menu` varchar(50) DEFAULT NULL COMMENT '三级菜单吗',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8 COMMENT='【配置】后台菜单表';
-- ----------------------------
-- Records of oa_admin_menu
-- ----------------------------
INSERT INTO `oa_admin_menu` (`id`,`pid`,`title`,`url`,`icon`,`menu_type`,`sort`,`status`,`rule_id`,`module`,`menu`) VALUES ('52','0','基础管理','','','1','0','1','59','Administrative','');
INSERT INTO `oa_admin_menu` (`id`,`pid`,`title`,`url`,`icon`,`menu_type`,`sort`,`status`,`rule_id`,`module`,`menu`) VALUES ('53','52','系统配置','','','1','0','1','61','Administrative','');
INSERT INTO `oa_admin_menu` (`id`,`pid`,`title`,`url`,`icon`,`menu_type`,`sort`,`status`,`rule_id`,`module`,`menu`) VALUES ('54','53','菜单管理','/home/menu/list','','1','0','1','21','Administrative','menu');
INSERT INTO `oa_admin_menu` (`id`,`pid`,`title`,`url`,`icon`,`menu_type`,`sort`,`status`,`rule_id`,`module`,`menu`) VALUES ('55','53','系统参数','/home/config/add','','1','0','1','29','Administrative','systemConfig');
INSERT INTO `oa_admin_menu` (`id`,`pid`,`title`,`url`,`icon`,`menu_type`,`sort`,`status`,`rule_id`,`module`,`menu`) VALUES ('56','53','权限规则','/home/rule/list','','1','0','1','13','Administrative','rule');
INSERT INTO `oa_admin_menu` (`id`,`pid`,`title`,`url`,`icon`,`menu_type`,`sort`,`status`,`rule_id`,`module`,`menu`) VALUES ('57','52','组织架构','','','1','0','1','63','Administrative','');
INSERT INTO `oa_admin_menu` (`id`,`pid`,`title`,`url`,`icon`,`menu_type`,`sort`,`status`,`rule_id`,`module`,`menu`) VALUES ('58','57','岗位管理','/home/position/list','','1','0','0','31','Administrative','position');
INSERT INTO `oa_admin_menu` (`id`,`pid`,`title`,`url`,`icon`,`menu_type`,`sort`,`status`,`rule_id`,`module`,`menu`) VALUES ('59','57','部门管理','/home/structures/list','','1','0','0','39','Administrative','structures');
INSERT INTO `oa_admin_menu` (`id`,`pid`,`title`,`url`,`icon`,`menu_type`,`sort`,`status`,`rule_id`,`module`,`menu`) VALUES ('60','57','用户组管理','/home/groups/list','','1','0','1','47','Administrative','groups');
INSERT INTO `oa_admin_menu` (`id`,`pid`,`title`,`url`,`icon`,`menu_type`,`sort`,`status`,`rule_id`,`module`,`menu`) VALUES ('61','52','账户管理','','','1','0','1','62','Administrative','');
INSERT INTO `oa_admin_menu` (`id`,`pid`,`title`,`url`,`icon`,`menu_type`,`sort`,`status`,`rule_id`,`module`,`menu`) VALUES ('62','61','账户列表','/home/users/list','','1','0','1','55','Administrative','users');
INSERT INTO `oa_admin_menu` (`id`,`pid`,`title`,`url`,`icon`,`menu_type`,`sort`,`status`,`rule_id`,`module`,`menu`) VALUES ('63','0','点餐系统','','','1','0','1','68','Order','');
INSERT INTO `oa_admin_menu` (`id`,`pid`,`title`,`url`,`icon`,`menu_type`,`sort`,`status`,`rule_id`,`module`,`menu`) VALUES ('64','63','实时订单','','','1','0','1','69','Order','');
INSERT INTO `oa_admin_menu` (`id`,`pid`,`title`,`url`,`icon`,`menu_type`,`sort`,`status`,`rule_id`,`module`,`menu`) VALUES ('65','63','菜谱管理','','','1','0','1','70','Order','');
INSERT INTO `oa_admin_menu` (`id`,`pid`,`title`,`url`,`icon`,`menu_type`,`sort`,`status`,`rule_id`,`module`,`menu`) VALUES ('66','63','餐桌管理','','','1','0','1','71','Order','');
INSERT INTO `oa_admin_menu` (`id`,`pid`,`title`,`url`,`icon`,`menu_type`,`sort`,`status`,`rule_id`,`module`,`menu`) VALUES ('67','66','餐桌列表','/order/tables/list','','1','0','1','77','Order','table');
INSERT INTO `oa_admin_menu` (`id`,`pid`,`title`,`url`,`icon`,`menu_type`,`sort`,`status`,`rule_id`,`module`,`menu`) VALUES ('68','65','菜谱列表','/order/menus/list','','1','0','1','87','Order','');
INSERT INTO `oa_admin_menu` (`id`,`pid`,`title`,`url`,`icon`,`menu_type`,`sort`,`status`,`rule_id`,`module`,`menu`) VALUES ('69','65','菜谱分类','/order/menuCategory/list','','1','0','1','94','Order','');
INSERT INTO `oa_admin_menu` (`id`,`pid`,`title`,`url`,`icon`,`menu_type`,`sort`,`status`,`rule_id`,`module`,`menu`) VALUES ('70','64','实时点餐','/order/order/list','','1','0','1','73','Order','');

-- ----------------------------
-- Table structure for oa_admin_post
-- ----------------------------
DROP TABLE IF EXISTS `oa_admin_post`;
CREATE TABLE `oa_admin_post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL COMMENT '岗位名称',
  `remark` varchar(200) DEFAULT NULL COMMENT '岗位备注',
  `create_time` int(11) DEFAULT NULL COMMENT '数据创建时间',
  `status` tinyint(5) DEFAULT '1' COMMENT '状态1启用,0禁用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 COMMENT='岗位表';
-- ----------------------------
-- Records of oa_admin_post
-- ----------------------------
INSERT INTO `oa_admin_post` (`id`,`name`,`remark`,`create_time`,`status`) VALUES ('33','店长','店长','1547190383','1');
INSERT INTO `oa_admin_post` (`id`,`name`,`remark`,`create_time`,`status`) VALUES ('34','厨师','','1547190398','1');
INSERT INTO `oa_admin_post` (`id`,`name`,`remark`,`create_time`,`status`) VALUES ('35','服务员','','1547190410','1');

-- ----------------------------
-- Table structure for oa_admin_rule
-- ----------------------------
DROP TABLE IF EXISTS `oa_admin_rule`;
CREATE TABLE `oa_admin_rule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT '' COMMENT '名称',
  `name` varchar(100) DEFAULT '' COMMENT '定义',
  `level` tinyint(5) DEFAULT NULL COMMENT '级别。1模块,2控制器,3操作',
  `pid` int(11) DEFAULT '0' COMMENT '父id，默认0',
  `status` tinyint(3) DEFAULT '1' COMMENT '状态，1启用，0禁用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of oa_admin_rule
-- ----------------------------
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('10','基础功能','admin','1','0','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('11','权限规则','rules','2','10','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('13','规则列表','index','3','11','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('14','权限详情','read','3','11','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('15','编辑权限','update','3','11','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('16','删除权限','delete','3','11','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('17','添加权限','save','3','11','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('18','批量删除权限','deletes','3','11','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('19','批量启用/禁用权限','enables','3','11','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('20','菜单管理','menus','2','10','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('21','菜单列表','index','3','20','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('22','添加菜单','save','3','20','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('23','菜单详情','read','3','20','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('24','编辑菜单','update','3','20','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('25','删除菜单','delete','3','20','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('26','批量删除菜单','deletes','3','20','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('27','批量启用/禁用菜单','enables','3','20','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('28','系统参数','systemConfigs','2','10','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('29','修改系统配置','save','3','28','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('30','岗位管理','posts','2','10','0');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('31','岗位列表','index','3','30','0');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('32','岗位详情','read','3','30','0');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('33','编辑岗位','update','3','30','0');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('34','删除岗位','delete','3','30','0');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('35','添加岗位','save','3','30','0');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('36','批量删除岗位','deletes','3','30','0');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('37','批量启用/禁用岗位','enables','3','30','0');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('38','部门管理','structures','2','10','0');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('39','部门列表','index','3','38','0');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('40','部门详情','read','3','38','0');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('41','编辑部门','update','3','38','0');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('42','删除部门','delete','3','38','0');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('43','添加部门','save','3','38','0');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('44','批量删除部门','deletes','3','38','0');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('45','批量启用/禁用部门','enables','3','38','0');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('46','用户组管理','groups','2','10','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('47','用户组列表','index','3','46','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('48','用户组详情','read','3','46','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('49','编辑用户组','update','3','46','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('50','删除用户组','delete','3','46','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('51','添加用户组','save','3','46','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('52','批量删除用户组','deletes','3','46','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('53','批量启用/禁用用户组','enables','3','46','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('54','账户管理','users','2','10','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('55','成员列表','index','3','54','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('56','成员详情','read','3','54','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('57','删除成员','delete','3','54','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('59','基础管理','Adminstrative','2','10','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('61','系统配置二级菜单','systemConfig','3','59','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('62','账户管理二级菜单','personnel','3','59','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('63','组织架构二级菜单','structures','3','59','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('64','成员添加','save','3','54','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('65','批量删除账户','deletes','3','54','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('66','批量启用/禁用账户','enables','3','54','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('67','点餐系统','order','1','0','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('68','点餐系统管理','Order','2','67','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('69','实时订单二级菜单','currentOrder','3','68','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('70','菜谱管理二级菜单','orderMenu','3','68','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('71','餐桌管理二级菜单','table','3','68','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('72','点餐管理','order','2','67','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('73','实时点餐列表','index','3','72','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('74','实时点餐详情','read','3','72','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('75','餐桌管理','table','2','67','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('76','菜谱管理','menus','2','67','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('77','餐桌列表','index','3','75','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('78','编辑餐桌','update','3','75','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('79','删除擦卓','delete','3','75','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('80','添加餐桌','save','3','75','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('81','批量删除餐桌','deletes','3','75','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('82','批量启用/禁用餐桌','enables','3','75','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('83','财务系统','finance','1','0','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('84','进销存系统','Erp','1','0','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('85','支付系统','payment','1','0','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('87','菜谱列表','index','3','76','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('88','编辑菜谱','update','3','76','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('89','删除菜谱','delete','3','76','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('90','添加菜谱','save','3','76','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('91','批量删除菜谱','deletes','3','76','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('92','批量启用/禁用菜谱','enables','3','76','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('93','菜谱分类管理','menuCategory','2','67','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('94','分类列表','index','3','93','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('95','添加分类','save','3','93','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('96','编辑分类','update','3','93','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('97','删除分类','delete','3','93','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('98','批量删除分类','deletes','3','93','1');
INSERT INTO `oa_admin_rule` (`id`,`title`,`name`,`level`,`pid`,`status`) VALUES ('99','批量启用/禁用分类','enables','3','93','1');

-- ----------------------------
-- Table structure for oa_admin_structure
-- ----------------------------
DROP TABLE IF EXISTS `oa_admin_structure`;
CREATE TABLE `oa_admin_structure` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT '',
  `pid` int(11) DEFAULT '0',
  `status` tinyint(3) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of oa_admin_structure
-- ----------------------------
INSERT INTO `oa_admin_structure` (`id`,`name`,`pid`,`status`) VALUES ('58','山西顺溜集团','0','1');
INSERT INTO `oa_admin_structure` (`id`,`name`,`pid`,`status`) VALUES ('59','顺溜学府街分店','58','1');
INSERT INTO `oa_admin_structure` (`id`,`name`,`pid`,`status`) VALUES ('60','顺溜亲贤街分店','58','1');

-- ----------------------------
-- Table structure for oa_admin_user
-- ----------------------------
DROP TABLE IF EXISTS `oa_admin_user`;
CREATE TABLE `oa_admin_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(100) DEFAULT NULL COMMENT '管理后台账号',
  `password` varchar(100) DEFAULT NULL COMMENT '管理后台密码',
  `remark` varchar(100) DEFAULT NULL COMMENT '用户备注',
  `create_time` int(11) DEFAULT NULL,
  `realname` varchar(100) DEFAULT NULL COMMENT '真实姓名',
  `structure_id` int(11) DEFAULT NULL COMMENT '部门',
  `post_id` int(11) DEFAULT NULL COMMENT '岗位',
  `status` tinyint(3) DEFAULT NULL COMMENT '状态,1启用0禁用',
  `mobile` bigint(12) NOT NULL DEFAULT '0',
  `email` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of oa_admin_user
-- ----------------------------
INSERT INTO `oa_admin_user` (`id`,`username`,`password`,`remark`,`create_time`,`realname`,`structure_id`,`post_id`,`status`,`mobile`,`email`) VALUES ('1','admin','d93a5def7511da3d0f2d171d9c344e91','','','超级管理员','1','5','1','0','');
INSERT INTO `oa_admin_user` (`id`,`username`,`password`,`remark`,`create_time`,`realname`,`structure_id`,`post_id`,`status`,`mobile`,`email`) VALUES ('4','wangjiwei','d93a5def7511da3d0f2d171d9c344e91','测试测试','1547189868','王济伟','59','33','1','17635670092','353830223@qq.com');
INSERT INTO `oa_admin_user` (`id`,`username`,`password`,`remark`,`create_time`,`realname`,`structure_id`,`post_id`,`status`,`mobile`,`email`) VALUES ('5','yindan','d93a5def7511da3d0f2d171d9c344e91','','1547190652','殷聃','59','34','1','17635670093','353830224@qq.com');
INSERT INTO `oa_admin_user` (`id`,`username`,`password`,`remark`,`create_time`,`realname`,`structure_id`,`post_id`,`status`,`mobile`,`email`) VALUES ('6','cheyongqiang','d93a5def7511da3d0f2d171d9c344e91','','1547190912','车永强','60','35','1','17635670095','353830225@qq.com');

-- ----------------------------
-- Table structure for oa_jobs
-- ----------------------------
DROP TABLE IF EXISTS `oa_jobs`;
CREATE TABLE `oa_jobs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) unsigned NOT NULL,
  `reserved` tinyint(3) unsigned NOT NULL,
  `reserved_at` int(10) unsigned DEFAULT NULL,
  `available_at` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of oa_jobs
-- ----------------------------

-- ----------------------------
-- Table structure for oa_order_menu
-- ----------------------------
DROP TABLE IF EXISTS `oa_order_menu`;
CREATE TABLE `oa_order_menu` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL COMMENT '菜品名称',
  `price` int(10) NOT NULL DEFAULT '0' COMMENT '价格',
  `image` varchar(200) NOT NULL COMMENT '菜品图片',
  `detail` text COMMENT '菜品详细',
  `introduction` varchar(255) DEFAULT NULL COMMENT '品菜介绍',
  `attributions` text NOT NULL COMMENT '菜品规格',
  `category_id` int(10) NOT NULL DEFAULT '0' COMMENT '品菜所属分类',
  `status` tinyint(2) DEFAULT '1' COMMENT '菜品状态 0:下架 1：上架 ',
  `sale_nums` bigint(20) NOT NULL DEFAULT '0' COMMENT '销量',
  `order` int(10) NOT NULL DEFAULT '0' COMMENT '序排',
  `recommend` enum('2','5','4','3','1') NOT NULL DEFAULT '1' COMMENT '商家推荐度',
  `preferential_price` int(10) unsigned DEFAULT NULL COMMENT '优惠价',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of oa_order_menu
-- ----------------------------
INSERT INTO `oa_order_menu` (`id`,`name`,`price`,`image`,`detail`,`introduction`,`attributions`,`category_id`,`status`,`sale_nums`,`order`,`recommend`,`preferential_price`) VALUES ('53','干锅土豆片','1600','uploads/menus/20190117\1029234e1d3cb3d06453e5310c64cd2f.png','<p>干锅土豆片</p>','干锅土豆片','[{"specName":"\u5206\u91cf","specValue":["\u5927\u4efd","\u5c0f\u4efd"],"specValueChecked":["\u5927\u4efd","\u5c0f\u4efd"]}]','48','1','0','0','5','1400');

-- ----------------------------
-- Table structure for oa_order_menu_attribution
-- ----------------------------
DROP TABLE IF EXISTS `oa_order_menu_attribution`;
CREATE TABLE `oa_order_menu_attribution` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `specName` text NOT NULL COMMENT '当前规格名',
  `preferential_price` int(10) NOT NULL DEFAULT '0' COMMENT '惠价优',
  `price` int(10) NOT NULL DEFAULT '0' COMMENT '格价',
  `sale_nums` int(10) NOT NULL DEFAULT '0' COMMENT '销量',
  `menu_id` int(10) NOT NULL DEFAULT '0' COMMENT '菜谱id',
  `specValue` text NOT NULL COMMENT '前当规格值',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=139 DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of oa_order_menu_attribution
-- ----------------------------
INSERT INTO `oa_order_menu_attribution` (`id`,`specName`,`preferential_price`,`price`,`sale_nums`,`menu_id`,`specValue`) VALUES ('137','["\u5206\u91cf"]','1400','1600','0','53','["\u5927\u4efd"]');
INSERT INTO `oa_order_menu_attribution` (`id`,`specName`,`preferential_price`,`price`,`sale_nums`,`menu_id`,`specValue`) VALUES ('138','["\u5206\u91cf"]','1200','1400','0','53','["\u5c0f\u4efd"]');

-- ----------------------------
-- Table structure for oa_order_menu_category
-- ----------------------------
DROP TABLE IF EXISTS `oa_order_menu_category`;
CREATE TABLE `oa_order_menu_category` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT '分类名称',
  `pid` int(10) NOT NULL DEFAULT '0' COMMENT '上级分类',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态',
  `structure_id` int(10) NOT NULL DEFAULT '0' COMMENT '所属餐馆',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of oa_order_menu_category
-- ----------------------------
INSERT INTO `oa_order_menu_category` (`id`,`name`,`pid`,`status`,`structure_id`) VALUES ('29','面皮','0','1','5');
INSERT INTO `oa_order_menu_category` (`id`,`name`,`pid`,`status`,`structure_id`) VALUES ('47','盖饭','0','1','0');
INSERT INTO `oa_order_menu_category` (`id`,`name`,`pid`,`status`,`structure_id`) VALUES ('48','干锅','0','1','0');
INSERT INTO `oa_order_menu_category` (`id`,`name`,`pid`,`status`,`structure_id`) VALUES ('49','面食','0','1','0');
INSERT INTO `oa_order_menu_category` (`id`,`name`,`pid`,`status`,`structure_id`) VALUES ('50','米饭','0','1','0');
INSERT INTO `oa_order_menu_category` (`id`,`name`,`pid`,`status`,`structure_id`) VALUES ('51','炒菜','0','1','0');
INSERT INTO `oa_order_menu_category` (`id`,`name`,`pid`,`status`,`structure_id`) VALUES ('52','汤','0','1','0');
INSERT INTO `oa_order_menu_category` (`id`,`name`,`pid`,`status`,`structure_id`) VALUES ('53','饼','0','1','0');
INSERT INTO `oa_order_menu_category` (`id`,`name`,`pid`,`status`,`structure_id`) VALUES ('54','早餐','0','1','0');
INSERT INTO `oa_order_menu_category` (`id`,`name`,`pid`,`status`,`structure_id`) VALUES ('55','方便面','54','1','0');
INSERT INTO `oa_order_menu_category` (`id`,`name`,`pid`,`status`,`structure_id`) VALUES ('56','油条','54','1','0');
INSERT INTO `oa_order_menu_category` (`id`,`name`,`pid`,`status`,`structure_id`) VALUES ('57','老豆腐','54','1','0');
INSERT INTO `oa_order_menu_category` (`id`,`name`,`pid`,`status`,`structure_id`) VALUES ('58','豆腐脑','54','1','0');
INSERT INTO `oa_order_menu_category` (`id`,`name`,`pid`,`status`,`structure_id`) VALUES ('59','煎饼','54','1','0');
INSERT INTO `oa_order_menu_category` (`id`,`name`,`pid`,`status`,`structure_id`) VALUES ('60','灌饼','54','1','0');
INSERT INTO `oa_order_menu_category` (`id`,`name`,`pid`,`status`,`structure_id`) VALUES ('61','杂粮煎饼','59','1','0');
INSERT INTO `oa_order_menu_category` (`id`,`name`,`pid`,`status`,`structure_id`) VALUES ('62','鸡蛋灌饼','60','1','0');
INSERT INTO `oa_order_menu_category` (`id`,`name`,`pid`,`status`,`structure_id`) VALUES ('63','湘菜','0','1','0');
INSERT INTO `oa_order_menu_category` (`id`,`name`,`pid`,`status`,`structure_id`) VALUES ('64','粤菜','0','1','0');
INSERT INTO `oa_order_menu_category` (`id`,`name`,`pid`,`status`,`structure_id`) VALUES ('65','西餐','0','1','0');

-- ----------------------------
-- Table structure for oa_order_table
-- ----------------------------
DROP TABLE IF EXISTS `oa_order_table`;
CREATE TABLE `oa_order_table` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `seats` tinyint(3) NOT NULL DEFAULT '0' COMMENT '座位数',
  `status` tinyint(2) NOT NULL DEFAULT '1' COMMENT '状态  ',
  `customers` tinyint(3) NOT NULL DEFAULT '0' COMMENT '已有顾客数量',
  `structure_id` int(10) DEFAULT '0' COMMENT '所属部门id',
  `name` varchar(20) NOT NULL COMMENT '餐桌名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COMMENT='餐桌表';
-- ----------------------------
-- Records of oa_order_table
-- ----------------------------
INSERT INTO `oa_order_table` (`id`,`seats`,`status`,`customers`,`structure_id`,`name`) VALUES ('2','10','1','0','59','1号桌');
INSERT INTO `oa_order_table` (`id`,`seats`,`status`,`customers`,`structure_id`,`name`) VALUES ('5','8','1','0','59','2号桌');
INSERT INTO `oa_order_table` (`id`,`seats`,`status`,`customers`,`structure_id`,`name`) VALUES ('6','10','1','0','59','3号桌');
INSERT INTO `oa_order_table` (`id`,`seats`,`status`,`customers`,`structure_id`,`name`) VALUES ('7','16','1','0','59','4号桌');
INSERT INTO `oa_order_table` (`id`,`seats`,`status`,`customers`,`structure_id`,`name`) VALUES ('8','127','1','0','59','5号桌');
INSERT INTO `oa_order_table` (`id`,`seats`,`status`,`customers`,`structure_id`,`name`) VALUES ('11','12','1','0','','8号桌');

-- ----------------------------
-- Table structure for oa_system_config
-- ----------------------------
DROP TABLE IF EXISTS `oa_system_config`;
CREATE TABLE `oa_system_config` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '配置ID',
  `name` varchar(50) DEFAULT '',
  `value` varchar(100) DEFAULT '' COMMENT '配置值',
  `group` tinyint(4) unsigned DEFAULT '0' COMMENT '配置分组',
  `need_auth` tinyint(4) DEFAULT '1' COMMENT '1需要登录后才能获取，0不需要登录即可获取',
  PRIMARY KEY (`id`),
  UNIQUE KEY `参数名` (`name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='【配置】系统配置表';
-- ----------------------------
-- Records of oa_system_config
-- ----------------------------
INSERT INTO `oa_system_config` (`id`,`name`,`value`,`group`,`need_auth`) VALUES ('1','SYSTEM_NAME','VueThink通用后台登录','0','1');
INSERT INTO `oa_system_config` (`id`,`name`,`value`,`group`,`need_auth`) VALUES ('2','SYSTEM_LOGO','uploads\20170219\d9fe7b784e1b1f406234b7b301e627e8.png','0','1');
INSERT INTO `oa_system_config` (`id`,`name`,`value`,`group`,`need_auth`) VALUES ('3','LOGIN_SESSION_VALID','1644','0','1');
INSERT INTO `oa_system_config` (`id`,`name`,`value`,`group`,`need_auth`) VALUES ('4','IDENTIFYING_CODE','0','0','1');

