import userApi from '../../api/user'
// 引入本地存储方法
import { setItem, getItem, removeItem } from '@/utils/storage'
import { resetRouter } from '@/utils/removeRouter'
// 引入常量
import { TOKEN, USERINFO } from '@/utils/constCon'

export default {
  namespaced: true,
  state: () => ({
    // 用户token
    token: getItem(TOKEN) || '',
    // 用户信息
    userInfo: {}
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
      try {
        const data = await userApi.login(payload)
        commit('setToken', data.token)
        return data
      } catch (e) {
        console.log(e)
      }
    },
    /**
     * 获取用户信息
     * @param commit
     * @returns {Promise<void>}
     */
    async getUserInfo({ commit }) {
      try {
        const userInfo = await userApi.getUserInfo()
        commit('setUserInfo', userInfo)
        return userInfo
      } catch (e) {
        console.log(e)
      }
    },
    /**
     * 退出登录方法
     * @param commit
     */
    logout({ commit }) {
      resetRouter()
      commit('setToken', '')
      commit('setUserInfo', {})
      removeItem(TOKEN)
      removeItem(USERINFO)
    }
  }
}
