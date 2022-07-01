import layout from '@/layout'

export default {
  path: '/article',
  name: 'articleCreate',
  component: layout,
  meta: {
    title: '文章',
    icon: 'article'
  },
  children: [
    {
      path: '/article/create',
      name: 'articleCreate',
      component: () => import('@/views/article-create'),
      meta: {
        title: '创建文章',
        icon: 'article-create'
      }
    }
  ]
}
