import request from '@/utils/request'

export const getRoleList = () => {
  return request({
    url: '/role/list',
    method: 'GET'
  })
}
