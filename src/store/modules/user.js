import userApi from '../../api/user'

export default {
  namespaced: true,
  state: () => ({
    // 用户token
    token: ''
  }),
  mutations: {
    // 存储token
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {
    async userLogin({ commit }, payload) {
      const data = await userApi.login(payload)
      console.log(data)
    }
  }
}
