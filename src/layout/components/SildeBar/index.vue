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
import { computed } from 'vue'
import MenuTree from '@/layout/components/SildeBar/MenuTree'
import { generateMenuList } from '@/utils/util'
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'

const router = useRouter()
// 获取过滤的路由数据
// const menuList = util.filterMenuList(routesList)
const menuList = computed(() => {
  const routes = filterRouters(router.getRoutes())
  return generateMenuList(generateMenus(routes))
})
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
