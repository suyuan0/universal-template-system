// 过滤路由表数据

/**
 * 获取子级路由
 * @param routes
 */
const getChildrenRoutes = (routes) => {
  const result = []
  routes.forEach((item) => {
    if (item.children && item.children.length > 0) {
      result.push(...item.children)
    }
  })
  return result
}

/**
 * 获取一级路由
 * @param routes
 */
export const filterRouters = (routes) => {
  const data = getChildrenRoutes(routes)
  return routes.filter((route) => {
    return !data.find((item) => {
      return route.path === item.path
    })
  })
}

const isNull = (data) => {
  if (!data) return true
  if (JSON.stringify(data) === '[]') return true
  if (JSON.stringify(data) === '{}') return true
  return false
}

/**
 * 将所有的一级路由处理成菜单数据
 * @param routes
 */
export const generateMenus = (routes) => {
  const result = []
  routes.forEach((item) => {
    if (isNull(item.meta) && isNull(item.children)) return
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenus(item.children))
      return
    }
    // 获取三条数据的path路径
    const routePath = item.path

    let route = result.find((item) => item.path === routePath)
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      if (item.meta.title && item.meta.icon) {
        result.push(route)
      }
    }
    if (item.children) {
      route.children.push(...generateMenus(item.children))
    }
  })
  return result
}
