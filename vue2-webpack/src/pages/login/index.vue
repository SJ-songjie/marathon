<script>
export default {
  name: "Login",

  data() {
    return {
      user: "admin",
      password: "123456",
    };
  },

  // 方法集合
  methods: {
    validateEvent(user, password) {
      if (user === "U" && this.user.length === 0) {
        this.$message.error("请输入用户名称！");
        return false;
      }

      if (password === "P" && this.password.length === 0) {
        this.$message.error("请输入用户密码！");
        return false;
      }

      return true;
    },

    // 登录
    onLogin() {
      if (!this.validateEvent("U", "P")) return false;
      this.$message.success("登录成功!");
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<template>
  <div class="page">
    <div class="page-box">
      <div class="page-login">
        <form>
          <el-input
            class="page-in-box mb30"
            clearable
            v-model.trim="user"
            placeholder="用户"
            @blur="validateEvent('U', null)"
          ></el-input>
          <el-input
            class="page-in-box mb30"
            clearable
            show-password
            v-model.trim="password"
            placeholder="密码"
            @blur="validateEvent(null, 'P')"
          ></el-input>
        </form>

        <el-button class="page-bu-box" @click="onLogin">LOGIN</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.page {
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url("../../public/assets/images/loginBg.jpg");

  &-box {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-login {
    width: 500px;
    height: auto;
  }

  &-in-box /deep/ input,
  &-bu-box {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    background-color: transparent;
  }

  &-in-box:hover,
  &-bu-box:hover {
    background-color: rgba(#000, 0.1);
    backdrop-filter: saturate(180%) blur(5px);
  }

  // &-box:has(&-in-box:hover),
  // &-box:has(&-bu-box:hover) {
  //   background-color: rgba(#000, 0.3);
  // }

  &-in-box /deep/ input::placeholder {
    color: #409eff;
  }

  &-bu-box {
    width: 100%;
    font-size: 18px;
    color: #409eff;
  }
}

.mb10 {
  margin-bottom: 10px;
}

.mb30 {
  margin-bottom: 30px;
}
</style>
