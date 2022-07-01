/**
 * 实现页面的登录鉴权
 */

import router from '@/router'
import store from '@/store'

// 定义未登录可以访问的白名单
const whiteList = ['/login']

// 实现路由守卫
router.beforeEach(async (to, from, next) => {
  // 获取token
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      if (!store.getters.hasUserInfo) {
        const { permission } = await store.dispatch('user/getUserInfo')
        const filterRoutes = await store.dispatch(
          'permission/filterRoutes',
          permission.menus
        )
        filterRoutes.forEach((item) => {
          router.addRoute(item)
        })
      }
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
