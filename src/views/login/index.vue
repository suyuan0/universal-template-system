<template>
  <div class="login-wrapper">
    <el-form
      class="login-form"
      :model="loginForm"
      :rules="loginRules"
      ref="loginFormRef"
    >
      <div class="title-container">
        <h3>用户登录</h3>
        <svg-icon className="svg-language" icon="language"></svg-icon>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <el-icon>
            <svg-icon icon="user"></svg-icon>
          </el-icon>
        </span>
        <el-input
          placeholder="username"
          v-model="loginForm.username"
        ></el-input>
      </el-form-item>
      <el-form-item class="passInput" prop="password">
        <span class="svg-container">
          <el-icon>
            <svg-icon icon="password"></svg-icon>
          </el-icon>
        </span>
        <el-input
          :type="passwordType"
          placeholder="password"
          v-model="loginForm.password"
        />
        <span class="svg-pwd" @click="handlePasswordEdit">
          <el-icon> <svg-icon :icon="passwordIconStatus"></svg-icon> </el-icon
        ></span>
      </el-form-item>
      <el-button type="primary" class="login-button" @click="handleLoginSubmit"
        >登录
      </el-button>
    </el-form>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { validatePassword } from './rules'

const loginFormRef = ref(null)
// 密码框type
const passwordType = ref('password')
// 切换密码框ytpe
const handlePasswordEdit = () => {
  passwordType.value = passwordType.value === 'password' ? 'text' : 'password'
}
// 眼睛图标
const passwordIconStatus = computed(() => {
  return passwordType.value === 'password' ? 'eye' : 'eye-open'
})
// 表单验证规则
const loginRules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填'
    }
  ],
  password: [
    {
      trigger: 'blur',
      required: true,
      validator: validatePassword
    }
  ]
})
// 表单数据模型
const loginForm = reactive({
  username: '',
  password: ''
})
// 处理用户登录
const handleLoginSubmit = async () => {
  if (!loginFormRef.value) return
  await loginFormRef.value.validate((valid) => {
    if (valid) {
      alert('登录')
    }
  })
}
</script>

<style scoped lang="scss">
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
.login-wrapper {
  background-color: $bg;
  height: 100%;
  position: relative;
  .login-form {
    width: 520px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: 160px;

    .title-container {
      text-align: center;
      position: relative;
      margin-bottom: 40px;

      h3 {
        color: $light_gray;
        font-size: 26px;
      }

      ::v-deep .svg-language {
        position: absolute;
        top: 4px;
        right: 0;
        background-color: #fff;
        font-size: 22px;
        padding: 4px;
        border-radius: 4px;
        cursor: pointer;
      }
    }

    ::v-deep .el-form-item {
      height: 49px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.1);

      .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
      }
      .svg-pwd {
        cursor: pointer;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
      }
      .el-input {
        height: 100%;

        width: 85%;
        display: inline-block;

        .el-input__wrapper {
          background-color: transparent;
          box-shadow: none;
          vertical-align: middle;
          height: 100%;
          width: 100%;

          input {
            background-color: transparent;
            height: 100%;
            width: 100%;
            color: $cursor;
          }
        }
      }
    }

    ::v-deep .passInput {
      .el-form-item__content {
        width: 100%;
      }
    }

    .login-button {
      width: 100%;
    }
  }
}
</style>
