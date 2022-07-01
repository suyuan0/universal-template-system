import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout'
import articleRanking from './modules/articleRanking'
import articleCreate from './modules/articleCreate'
import roleList from './modules/roleList'
import permissionList from './modules/permissionList'
import userManage from './modules/userManage'
// 公有路由
const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'layout',
    component: layout,
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile'),
        meta: {
          title: '个人中心',
          icon: 'personnel'
        }
      },
      {
        path: '/chart',
        name: 'chart',
        component: () => import('@/views/chart'),
        meta: {
          title: '数据可视化',
          icon: 'fullscreen'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401')
      }
    ]
  }
]

// 私有路由表
export const privateRoutes = [
  articleRanking,
  articleCreate,
  roleList,
  permissionList,
  userManage
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
