<template>
  <div>
    <!--default-active 当前激活菜单的 index 
        open           	sub-menu 展开的回调
        close           sub-menu 收起的回调
     -->
      <el-menu
      :default-active="$router.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      router
      active-text-color="#ffd04b">
      
      <template v-for="memu in memulist">
        <!-- 没有子集的 -->
        <el-menu-item v-if="!memu.children" :index="memu.index" :key="memu.id">
        <i :class="memu.cls"></i>
        <span slot="title">{{memu.title}}</span>
        </el-menu-item>
        <!-- 有子集的 -->
        <el-submenu v-else :index="memu.index" :key="memu.id">
          <template slot="title">
            <i :class="memu.cls"></i>
            <span>{{memu.title}}</span>
          </template>
          <el-menu-item v-for="item in memu.children" :index="item.index" :key="item.id">{{item.name}}</el-menu-item>
        </el-submenu>

      
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memulist: [
        {
          id: 1,
          index: "/home/index",
          cls: "el-icon-s-cooperation",
          title: "首页"
        },
        {
          id: 2,
          index: "2",
          cls: "el-icon-s-cooperation",
          title: "商品管理",
          children: [
            { index: "/home/productlist", name: "商品管理" },
            { index: "/home/productadd", name: "添加管理" }
          ]
        },
        {
          id: 3,
          index: "3",
          cls: "el-icon-s-goods",
          title: "账号管理",
          children: [
            { index: "/home/accountlist", name: "账号管理" },
            { index: "/home/accountadd", name: "增加账号" },
            { index: "/home/passwordchange", name: "修改密码" }
          ]
        },
        {
          id: 4,
          index: "4",
          cls: "el-icon-s-data",
          title: "统计管理",
          children: [
            { index: "/home/sta", name: "销售统计" },
            { index: "/home/stocksta", name: "进货统计" }
          ]
        },
        {
          id: 5,
          index: "5",
          cls: "el-icon-s-tools",
          title: "菜单管理",
          children: [
            { index: "/menu/list", name: "菜单管理" },
            { index: "/menu/menuadd", name: "添加菜单" }
          ]
        }
      ]
    };
  },
};
</script>

<style lang="less" scoped>
.el-menu {
  .el-aside {
    height: 100%;
  }
}
</style>