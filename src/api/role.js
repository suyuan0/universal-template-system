import request from '@/utils/request'

/**
 * 获取角色列表
 * @returns {AxiosPromise}
 */
export const getRoleList = () => {
  return request({
    url: '/role/list',
    method: 'GET'
  })
}
