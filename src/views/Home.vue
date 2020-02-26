<template>
  <div class="homeBox">
    <el-container>
      <el-aside width="200px">
        <leftAside/>
      </el-aside>
      <el-container>
        <el-header><Header/></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import leftAside from '../components/LeftAside'
import Header from '../components/Header'
export default {
  components:{
    leftAside,
    Header
  }
};
</script>

<style lang="less" scoped>
.homeBox{
  height: 100%;
  &>.el-container{
    height: 100%;
  }
  .el-aside{
    background: #545C64;
    .el-menu {
      border: 0;
    }
  }
  .el-header,.el-footer{
    background: rgb(68, 75, 82);
  }
}


</style>