<template>
  <div>
    <div class='logo-container'>
      <el-avatar
        :size='44'
        shape='square'
        src='https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png'
      />
      <h1>imooc-admin</h1>
    </div>
    <MenuTree :menu='menuList' />
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import MenuTree from '@/layout/components/SildeBar/MenuTree'
import util from '@/utils/util'
// import { useRouter } from 'vue-router'
// import { getRoutes } from '@/utils/route'

// const router = useRouter()
// getRoutes(router.getRoutes())
// 定义路由数据
const routesList = reactive([
  {
    id: 1,
    title: '个人中心',
    icon: 'personnel',
    path: '/profile',
    children: []
  },
  {
    id: 2,
    title: '数据可视化',
    icon: 'nested',
    path: '/chart'
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
        path: '/user/manage',
        children: []
      },
      {
        id: 32,
        title: '角色列表',
        icon: 'role',
        path: '/user/role'
      },
      {
        id: 33,
        title: '权限列表',
        icon: 'permission',
        path: '/user/permission'
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
        path: '/article/ranking'
      },
      {
        id: 42,
        title: '创建文章',
        icon: 'introduce',
        path: '/article/create'
      }
    ]
  }
])

// 获取过滤的路由数据
const menuList = util.filterMenuList(routesList)
</script>

<style lang='scss' scoped>
.logo-container {
  height: var(--59cf8ee8) px;
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .el-avatar {
    border-radius: 11px;
  }

  h1 {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
