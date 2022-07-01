import request from '../utils/request'

/**
 * 登录接口
 * @param {Object} data
 * @method
 * @returns
 */
const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

/**
 * 获取用户信息
 */
const getUserInfo = () => {
  return request({
    url: '/sys/profile',
    method: 'GET'
  })
}

/**
 * 获取员工列表
 * @param data
 */
export const getUserManageList = (data) => {
  return request({
    url: '/user-manage/list',
    method: 'GET',
    data
  })
}

/**
 * 删除员工
 * @param id
 * @returns {AxiosPromise}
 */
export const deleteUserList = (id) => {
  return request({
    url: `/user-manage/detele/${id}`,
    method: 'GET'
  })
}

/**
 * 获取指定员工信息
 * @param id
 * @returns {AxiosPromise}
 */
export const getUserDetailInfo = (id) => {
  return request({
    url: `/user-manage/detail/${id}`,
    method: 'GET'
  })
}

export default {
  login,
  getUserInfo
}
