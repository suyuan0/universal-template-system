<template>
  <div class='nav-bar'>
    <div class='left-logo'>
      left
    </div>
    <div class='right-logo'>
      <sele :avatar='avatar' :dropdownList='dropdownList' @command='handelCommand'></sele>
    </div>
  </div>
</template>

<script setup>
import sele from '@/components/sele'
import { useStore } from 'vuex'
import { computed } from 'vue'
import router from '@/router'

const store = useStore()
const dropdownList = [
  {
    command: 'profile',
    title: '首页',
    id: 1
  },
  {
    command: 'home',
    title: '课程主页',
    id: 2
  },
  {
    command: 'exit',
    title: '退出登录',
    id: 3,
    divided: true
  }
]
const avatar = computed(() => {
  return store.getters.userInfo.avatar
})
// 下拉框事件
const handelCommand = (command) => {
  switch (command) {
    case 'profile':
      handelToHome()
      break
    case 'home':
      handleToClass()
      break
    case 'exit':
      handleLogout()
      break
  }
}

// 点击首页方法
const handelToHome = () => {
  router.push('/')
}

// TODO 点击课程主页方法
const handleToClass = () => {

}

// 退出方法
const handleLogout = () => {
  store.dispatch('user/logout')
  router.push('/login')
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
