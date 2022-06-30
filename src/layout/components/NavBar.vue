<template>
  <div class='nav-bar'>
    <div class='left-logo'>
      left
    </div>
    <div class='right-logo'>
      <drop-down :avatar='avatar' :dropdownList='dropdownList' @command='handelCommand'></drop-down>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, reactive } from 'vue'
import dropDown from '@/components/dropDown'

const store = useStore()
const dropdownList = reactive([
  {
    command: 'home',
    title: '首页',
    id: 1
  }, {
    command: 'profile',
    title: '课程主页',
    id: 1
  }, {
    command: 'exit',
    title: '退出登录',
    id: 1,
    divided: true
  }
])
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

  ::v-deep(.el-dropdown) {
    margin-top: 5px;
    margin-right: 10px;
    cursor: pointer;

    .el-avatar {
      background: transparent;
    }
  }

}

</style>
