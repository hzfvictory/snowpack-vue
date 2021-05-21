<template>
  <div class="login">
    <div class="loginBox">
      <div class="backGround"></div>
      <div class="loginCon">
        <el-form ref="loginForm" class="loginForm" :rules="rules" :model="ruleForm">
          <h3>账号登录</h3>

          <el-form-item prop="username">
            <el-input
              placeholder="请输入账号"
              clearable
              v-model.trim="ruleForm.username"
              @keyup.enter.native="onSuccess"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="请输入密码"
              clearable
              v-model.trim="ruleForm.password"
              show-password
              @keyup.enter.native="onSuccess"
            />
          </el-form-item>
          <el-button type="primary" class="loginBtn" @click="onSuccess">登录</el-button>

          <div class="loginF">
            <span @click="open2">忘记密码</span>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import lodash from "lodash/get";

  export default {
    data() {
      return {
        showSlide: false,
        ruleForm: {
          username: "",
          password: "",
        },
        rules: {
          username: [{ required: false, message: "请输入用户名", trigger: "blur" }],
          password: [{ required: false, message: "请输入密码", trigger: "blur" }],
        },
        loading: false,
      };
    },
    mounted() {
      let obj = { name: "小刚" };
      console.log(lodash(obj, "name"));
    },
    methods: {
      onSuccess() {
        this.showSlide = false;
        this._login();
      },
      onFail() {
        this.$message.error("验证失败");
      },
      _login() {
        this.$refs.loginForm.validate((valid) => {
          if (!valid) {
            return;
          }
          this.loading = true;

          let data = this.ruleForm;
          axios.post("http://sspapiad.ms.zhangyue.net:8070/login", data).then((data) => {
            console.log(data);
          });
        });
      },
      open2() {
        this.$notify({
          title: "找回密码",
          message: "请联系您对应的销售人员帮您找回密码",
        });
      },
    },
    components: {},
  };
</script>
<style scoped lang="scss" type="text/scss">
  .login {
    height: 100%;
    width: 100%;
    background: #000;
    background-size: 100% 100%;
    overflow: auto;
  }

  header {
    height: 63px;
    border-bottom: 1px solid rgba(216, 216, 216, 0.23);
    display: flex;
    align-items: center;

    img {
      margin-left: 20px;
      height: 24px;
    }
  }

  .loginBox {
    display: flex;
    height: calc(100% - 64px);
    justify-content: space-around;
    align-items: center;
  }

  .backGround {
    width: 825px;
    height: 680px;
    max-height: calc(100% - 63px);
    background: url("/src/assets/images/backround.png");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img:nth-child(1) {
      width: 632px;
      height: 89px;
      margin-bottom: 16px;
    }

    img:nth-child(2) {
      width: 681px;
      height: 28px;
    }
  }

  .loginCon {
    position: relative;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(1, 2, 5, 0.1);
    border-radius: 8px;
    padding: 54px 60px 0 60px;
    box-sizing: border-box;
    width: 412px;
    min-width: 412px;
    height: 416px;

    h3 {
      font-size: 20px;
      font-weight: 500;
      color: #222;
      margin-bottom: 26px;
    }
  }

  .loginBtn {
    width: 100%;
    background: #1f48df;
    margin-top: 10px;
    height: 45px;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    border-radius: 23px;
    font-size: 20px;
    box-shadow: 0 12px 10px -5px rgba(31, 72, 223, 0.2);
  }

  .loginF {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60px;
    background: rgba(0, 0, 0, 0.02);
    line-height: 60px;
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
    text-align: center;

    span {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1400px) {
    .backGround {
      width: 670px;
      height: 480px;

      img:nth-child(1) {
        width: 432px;
        height: 59px;
      }

      img:nth-child(2) {
        width: 481px;
        height: 18px;
      }
    }
  }
</style>
<style type="text/scss" lang="scss">
  .login {
    .el-form-item--small.el-form-item {
      border: none;
    }

    .el-form-item--small .el-form-item__content {
      height: 45px;
      border: none;
    }

    .el-input--small .el-input__inner {
      height: 45px;
      line-height: 45px;
      border-radius: 23px;
      border: 1px solid rgba(0, 0, 1, 0.1) !important;
    }
  }
</style>
