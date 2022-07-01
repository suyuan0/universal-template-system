import layout from '@/layout'

export default {
  path: '/article',
  name: 'articleRanking',
  component: layout,
  meta: {
    title: '文章',
    icon: 'article'
  },
  children: [
    {
      path: '/article/ranking',
      name: 'articleRanking',
      component: () => import('@/views/article-ranking'),
      meta: {
        title: '文章排名',
        icon: 'article-ranking'
      }
    },
    {
      path: '/article/:id',
      name: 'articleDetail',
      component: () => import('@/views/crticle-detail'),
      meta: {
        title: '文章详情'
      }
    }
  ]
}
