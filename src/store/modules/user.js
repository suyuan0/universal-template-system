import userApi from '../../api/user'
// 引入本地存储方法
import { setItem, getItem } from '@/utils/storage'
// 引入常量
import { TOKEN } from '@/utils/constCon'

export default {
  namespaced: true,
  state: () => ({
    // 用户token
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    // 存储token
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    async userLogin({ commit }, payload) {
      const data = await userApi.login(payload)
      commit('setToken', data.token)
      return data
    }
  }
}
