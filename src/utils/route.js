// const data = [
//   {
//     path: '/user/info/"id',
//     name: 'userInfo',
//     meta: {},
//     props: { default: false },
//     children: [],
//     instances: {},
//     leaveGuards: { 'Set(0)': [] },
//     updateGuards: { 'Set(0)': [] },
//     enterCallbacks: {},
//     components: {}
//   },
//   {
//     path: '/user/manage',
//     name: 'userManage',
//     meta: {
//       title: '员工管理',
//       icon: 'personnel-manage'
//     },
//     props: { default: false },
//     children: [],
//     instances: {},
//     leaveGuards: { 'Set(0)': [] },
//     updateGuards: { 'Set(0)': [] },
//     enterCallbacks: {},
//     components: {}
//   },
//   {
//     path: '/user/role',
//     name: 'userRole',
//     meta: {
//       title: '角色列表',
//       icon: 'role'
//     },
//     props: { default: false },
//     children: [],
//     instances: {},
//     leaveGuards: { 'Set(0)': [] },
//     updateGuards: { 'Set(0)': [] },
//     enterCallbacks: {},
//     components: {}
//   },
//   {
//     path: '/user/permission',
//     name: 'userPermission',
//     meta: {
//       title: '权限列表',
//       icon: 'permission'
//     },
//     props: { default: false },
//     children: [],
//     instances: {},
//     leaveGuards: { 'Set(0)': [] },
//     updateGuards: { 'Set(0)': [] },
//     enterCallbacks: {},
//     components: {}
//   },
//   {
//     path: '/user/import',
//     name: 'userImport',
//     meta: {},
//     props: { default: false },
//     children: [],
//     instances: {},
//     leaveGuards: { 'Set(0)': [] },
//     updateGuards: { 'Set(0)': [] },
//     enterCallbacks: {},
//     components: {}
//   },
//   {
//     path: '/article/ranking',
//     name: 'articleRanking',
//     meta: {
//       title: '文章排名',
//       icon: 'article-ranking'
//     },
//     props: { default: false },
//     children: [],
//     instances: {},
//     leaveGuards: { 'Set(0)': [] },
//     updateGuards: { 'Set(0)': [] },
//     enterCallbacks: {},
//     components: {}
//   },
//   {
//     path: '/article/create',
//     name: 'articleCreate',
//     meta: {
//       title: '创建文章',
//       icon: 'article-create'
//     },
//     props: { default: false },
//     children: [],
//     instances: {},
//     leaveGuards: { 'Set(0)': [] },
//     updateGuards: { 'Set(0)': [] },
//     enterCallbacks: {},
//     components: {}
//   },
//   {
//     path: '/article/:id',
//     name: 'articleDetail',
//     meta: {},
//     props: { default: false },
//     children: [],
//     instances: {},
//     leaveGuards: { 'Set(0)': [] },
//     updateGuards: { 'Set(0)': [] },
//     enterCallbacks: {},
//     components: {}
//   },
//   {
//     path: '/login',
//     name: 'login',
//     meta: {},
//     props: { default: false },
//     children: [],
//     instances: {},
//     leaveGuards: { 'Set(0)': [] },
//     updateGuards: { 'Set(0)': [] },
//     enterCallbacks: {},
//     components: {}
//   },
//   {
//     path: '/profile',
//     name: 'profile',
//     meta: {
//       title: '个人中心',
//       icon: 'personnel'
//     },
//     props: { default: false },
//     children: [],
//     instances: {},
//     leaveGuards: { 'Set(0)': [] },
//     updateGuards: { 'Set(0)': [] },
//     enterCallbacks: {},
//     components: {}
//   },
//   {
//     path: '/chart',
//     name: 'chart',
//     meta: {
//       title: '数据可视化',
//       icon: 'fullscreen'
//     },
//     props: { default: false },
//     children: [],
//     instances: { default: {} },
//     leaveGuards: { 'Set(0)': [] },
//     updateGuards: { 'Set(0)': [] },
//     enterCallbacks: {},
//     components: {
//       default: {
//         __file: 'src/views/chart/index.vue',
//         __hmrId: '8c5ca292'
//       }
//     }
//   },
//   {
//     path: '/404',
//     name: '404',
//     meta: {},
//     props: { default: false },
//     children: [],
//     instances: {},
//     leaveGuards: { 'Set(0)': [] },
//     updateGuards: { 'Set(0)': [] },
//     enterCallbacks: {},
//     components: {}
//   },
//   {
//     path: '/401',
//     name: '401',
//     meta: {},
//     props: { default: false },
//     children: [],
//     instances: {},
//     leaveGuards: { 'Set(0)': [] },
//     updateGuards: { 'Set(0)': [] },
//     enterCallbacks: {},
//     components: {}
//   },
//   {
//     path: '/',
//     redirect: '/profile',
//     name: 'layout',
//     meta: {},
//     props: { default: false },
//     children: [
//       {
//         path: '/profile',
//         name: 'profile',
//         meta: {
//           title: '个人中心',
//           icon: 'personnel'
//         }
//       },
//       {
//         path: '/chart',
//         name: 'chart',
//         meta: {
//           title: '数据可视化',
//           icon: 'fullscreen'
//         }
//       },
//       {
//         path: '/404',
//         name: '404'
//       },
//       {
//         path: '/401',
//         name: '401'
//       }
//     ],
//     instances: { default: {} },
//     leaveGuards: { 'Set(0)': [] },
//     updateGuards: { 'Set(0)': [] },
//     enterCallbacks: {},
//     components: {
//       default: {
//         name: 'index',
//         __scopeId: 'data-v-13877386',
//         __file: 'src/layout/index.vue',
//         __hmrId: '13877386'
//       }
//     }
//   },
//   {
//     path: '/user',
//     redirect: '/user/manage',
//     name: 'user',
//     meta: {
//       title: '用户',
//       icon: 'personnel'
//     },
//     props: { default: false },
//     children: [
//       {
//         path: '/user/manage',
//         name: 'userManage',
//         meta: {
//           title: '员工管理',
//           icon: 'personnel-manage'
//         }
//       },
//       {
//         path: '/user/role',
//         name: 'userRole',
//         meta: {
//           title: '角色列表',
//           icon: 'role'
//         }
//       },
//       {
//         path: '/user/permission',
//         name: 'userPermission',
//         meta: {
//           title: '权限列表',
//           icon: 'permission'
//         }
//       },
//       {
//         path: '/user/info/"id',
//         name: 'userInfo'
//       },
//       {
//         path: '/user/import',
//         name: 'userImport'
//       }
//     ],
//     instances: {},
//     leaveGuards: { 'Set(0)': [] },
//     updateGuards: { 'Set(0)': [] },
//     enterCallbacks: {},
//     components: {
//       default: {
//         name: 'index',
//         __scopeId: 'data-v-13877386',
//         __file: 'src/layout/index.vue',
//         __hmrId: '13877386'
//       }
//     }
//   },
//   {
//     path: '/article',
//     name: 'article',
//     meta: {
//       title: '文章',
//       icon: 'article'
//     },
//     props: { default: false },
//     children: [
//       {
//         path: '/article/ranking',
//         name: 'articleRanking',
//         meta: {
//           title: '文章排名',
//           icon: 'article-ranking'
//         }
//       },
//       {
//         path: '/article/create',
//         name: 'articleCreate',
//         meta: {
//           title: '创建文章',
//           icon: 'article-create'
//         }
//       },
//       {
//         path: '/article/:id',
//         name: 'articleDetail'
//       }
//     ],
//     instances: {},
//     leaveGuards: { 'Set(0)': [] },
//     updateGuards: { 'Set(0)': [] },
//     enterCallbacks: {},
//     components: {
//       default: {
//         name: 'index',
//         __scopeId: 'data-v-13877386',
//         __file: 'src/layout/index.vue',
//         __hmrId: '13877386'
//       }
//     }
//   }
// ]
//
// const getR = (data) => {
//   const result = []
//   data.forEach((item) => {
//     if (item.meta.title && item.meta.icon) {
//       if (item.children && item.children.length > 0) {
//         result.push({
//           meta: item.meta,
//           path: item.path
//         })
//       }
//     }
//   })
//   return result
// }
//
