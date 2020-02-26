<template>
  <div class="head">
    <!-- 面包屑 -->
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">活动管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 头像 -->
      <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <div class="block"><el-avatar :size="50"></el-avatar></div>        
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">个人中心</el-dropdown-item>
        <el-dropdown-item icon="el-icon-plus">注销</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>


  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.head {
  display: flex;
  justify-content: space-between;
  .el-breadcrumb {
    margin: 20px 0;
  }
  /deep/.el-breadcrumb__inner.is-link {
    color: #fff;
  }
}
</style>