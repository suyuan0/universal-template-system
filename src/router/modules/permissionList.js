import layout from '@/layout'

export default {
  path: '/user',
  component: layout,
  name: 'permissionList',
  meta: {
    title: '用户',
    icon: 'personnel'
  },
  children: [
    {
      path: '/user/permission',
      name: 'userPermission',
      component: () => import('@/views/permission-list'),
      meta: {
        title: '权限列表',
        icon: 'permission'
      }
    }
  ]
}
