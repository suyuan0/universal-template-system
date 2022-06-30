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

export default {
  login,
  getUserInfo
}
