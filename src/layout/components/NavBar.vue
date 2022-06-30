<template>
  <div class='nav-bar'>
    <div class='left-logo'>
      left
    </div>
    <div class='right-logo'>
      <el-dropdown trigger='click' @command='handelCommand'>
        <el-avatar :src='avatar' shape='square'></el-avatar>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command='home'>首页</el-dropdown-item>
            <el-dropdown-item command='profile'>课程主页</el-dropdown-item>
            <el-dropdown-item command='exit' divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>

      </el-dropdown>

    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const avatar = computed(() => {
  return store.getters.userInfo.avatar
})
// 下拉框事件
const handelCommand = (command) => {
  console.log(command)
}
</script>

<style lang='scss' scoped>
.nav-bar {
  height: 50px;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  display: flex;
  justify-content: space-between;
  padding-right: 16px;

  .el-dropdown {
    margin-top: 5px;
    margin-right: 10px;
    cursor: pointer;

    .el-avatar {
      background: transparent;
    }
  }

}

</style>
