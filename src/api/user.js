import request from '../utils/request'

/**
 * 登录接口
 * @param {Object} data
 * @method
 * @returns
 */
const login = (data) => {
  return request({ url: '/sys/login', method: 'POST', data })
}

export default {
  login
}
