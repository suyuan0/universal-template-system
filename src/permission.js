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
  document.title = to.meta.title
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      if (!store.getters.hasUserInfo) {
        const userInfo = await store.dispatch('user/getUserInfo')
        if (userInfo) {
          // 获取用户信息所有的路由权限
          const { permission } = userInfo
          // 调用vuex里面的filterRoutes方法过滤出当前用户所拥有的私有路由数据
          const filterRoutes = await store.dispatch(
            'permission/filterRoutes',
            permission.menus
          )
          // 遍历当前用户所拥有的私有路由表
          filterRoutes.forEach((item) => {
            router.addRoute(item)
          })
          // 指定要进入的路由
          return next(to.path)
        } else {
          next('/login')
        }
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
