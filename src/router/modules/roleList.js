import layout from '@/layout'

export default {
  path: '/user',
  component: layout,
  name: 'roleList',
  meta: {
    title: '用户',
    icon: 'personnel'
  },
  children: [
    {
      path: '/user/role',
      name: 'userRole',
      component: () => import('@/views/role-list'),
      meta: {
        title: '角色列表',
        icon: 'role'
      }
    }
  ]
}
