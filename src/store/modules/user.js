import userApi from '../../api/user'
// 引入本地存储方法
import { setItem, getItem } from '@/utils/storage'
// 引入常量
import { TOKEN, USERINFO } from '@/utils/constCon'

export default {
  namespaced: true,
  state: () => ({
    // 用户token
    token: getItem(TOKEN) || '',
    // 用户信息
    userInfo: getItem(USERINFO) || '{}'
  }),
  mutations: {
    // 存储token
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    /**
     * 设置用户信息
     * @param state
     * @param userInfo
     */
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
      setItem(USERINFO, userInfo)
    }
  },
  actions: {
    /**
     * 用户登录
     * @param commit
     * @param payload
     * @returns {Promise<AxiosResponse<any>>}
     */
    async userLogin({ commit }, payload) {
      const data = await userApi.login(payload)
      commit('setToken', data.token)
      return data
    },
    /**
     * 获取用户信息
     * @param commit
     * @returns {Promise<void>}
     */
    async getUserInfo({ commit }) {
      const userInfo = await userApi.getUserInfo()
      commit('setUserInfo', userInfo)
    }
  }
}
