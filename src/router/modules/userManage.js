import layout from '@/layout'

export default {
  path: '/user',
  component: layout,
  name: 'userManage',
  meta: {
    title: '用户',
    icon: 'personnel'
  },
  children: [
    {
      path: '/user/manage',
      component: () => import('@/views/user-manage'),
      meta: {
        title: '员工管理',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/user/info/"id',
      name: 'userInfo',
      component: () => import('@/views/user-info'),
      meta: {
        title: '员工信息'
      }
    },
    {
      path: '/user/import',
      name: 'userImport',
      component: () => import('@/views/import'),
      meta: {
        title: 'Excel导入'
      }
    }
  ]
}
