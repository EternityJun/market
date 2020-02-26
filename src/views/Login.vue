<template>
  <div id="managBox">
      <h2>管理系统</h2>
     <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item prop="username">
        <el-input type="text" prefix-icon="el-icon-user" v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" prefix-icon="el-icon-lock" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      let ruleForm = this.$refs.ruleForm;

      ruleForm.validate(valid => {
        if (valid) {
          this.$message({
            message: "恭喜你，这是一条成功消息",
            type: "success",
            duration:1000,
            onClose:()=>{
              this.$router.replace('/Home')
            }
          });
        } else {
           this.$message({
            showClose: true,
            message: '错了哦，这是一条错误消息',
            type: 'error'
          });
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
#managBox {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #2d3a4b;
  h2 {
    text-align: center;
    color: #fff;
  }
  .demo-ruleForm {
    width: 500px;
    .el-button {
      width: 100%;
    }
  }
}
</style>