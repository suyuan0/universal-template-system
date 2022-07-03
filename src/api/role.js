import request from '@/utils/request'

/**
 * 获取角色列表
 * @returns
 */
export const getRoleList = () => {
  return request({
    url: '/role/list',
    method: 'GET'
  })
}

/**
 * 获取指定角色的权限
 * @param id
 */
export const getRolePermission = (id) => {
  return request({
    url: `/role/permission/${id}`,
    method: 'GET'
  })
}
