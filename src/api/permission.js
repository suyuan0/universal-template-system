import request from '@/utils/request'

/**
 * 获取权限列表
 */
export const getPermission = () => {
  return request({
    url: '/permission/list',
    method: 'GET'
  })
}
