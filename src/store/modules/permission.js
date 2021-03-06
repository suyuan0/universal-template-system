import { publicRoutes, privateRoutes } from '@/router'

export default {
  namespaced: true,
  state: {
    routes: publicRoutes
  },
  mutations: {
    setRoutes(state, newRoutes) {
      state.routes = [...publicRoutes, ...newRoutes]
    }
  },
  actions: {
    // 根据权限赛选路由
    filterRoutes({ commit }, menus) {
      const routes = []
      menus.forEach((name) => {
        const data = privateRoutes.filter((item) => item.name === name)
        routes.push(...data)
      })
      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })
      commit('setRoutes', routes)
      return routes
    }
  }
}
