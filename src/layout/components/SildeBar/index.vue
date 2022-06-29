<template>
  <div>
    <MenuTree :menu='menuList' />
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import MenuTree from '@/layout/components/SildeBar/MenuTree'
import util from '@/utils/util'

// 定义路由数据
const routesList = reactive([
  {
    id: 1,
    title: '个人中心',
    icon: 'personnel',
    path: 'profile',
    children: []
  },
  {
    id: 2,
    title: '数据可视化',
    icon: 'nested',
    path: 'chart'
  },
  {
    id: 3,
    title: '用户',
    icon: 'personnel',
    children: [
      {
        id: 31,
        title: '员工管理',
        icon: 'personnel-manage',
        path: '/manage',
        children: []
      },
      {
        id: 32,
        title: '角色列表',
        icon: 'role',
        path: '/role'
      },
      {
        id: 33,
        title: '权限列表',
        icon: 'permission',
        path: '/permission'
      }
    ]
  },
  {
    id: 4,
    title: '文章',
    icon: 'article',
    children: [
      {
        id: 41,
        title: '文章排名',
        icon: 'article-ranking',
        path: '/ranking'
      },
      {
        id: 42,
        title: '创建文章',
        icon: 'introduce',
        path: '/create'
      }
    ]
  }
])

// 获取过滤的路由数据
const menuList = util.filterMenuList(routesList)
</script>

<style scoped>

</style>
