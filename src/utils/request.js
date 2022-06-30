// 封装axios
import axios from 'axios'
import md5 from 'md5'
import loading from './loading'
import { ElMessage } from 'element-plus'
import store from '@/store'

const instance = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 开启loading
    loading.open()
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time
    if (store.getters.token) {
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return config
  },
  (error) => {
    // 关闭loading
    loading.close()
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 关闭loading
    loading.close()
    // 全局响应处理
    const { success, message, data } = response.data
    if (success) {
      return data
    } else {
      _errorMessage(message)
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // 关闭loading
    loading.close()
    const message = error.toString()
    if (message.includes('Network')) {
      _errorMessage('网络错误')
    }
    if (message.includes('timeout')) {
      _errorMessage('请求超时')
    }
    const { code } = error.response.data
    if (code === 401 && error.response && error.response.data) {
      _errorMessage('请重新登录')
      // TODO 退出登录
    }
    return Promise.reject(error)
  }
)

// 失败信息
const _errorMessage = (message) => {
  ElMessage.error(message)
}

// 统一传参
const requset = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return instance(options)
}

// 获取icode、
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}

export default requset
