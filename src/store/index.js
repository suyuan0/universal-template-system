import { createStore } from 'vuex'
import user from './modules/user'
import permission from './modules/permission'
import getters from './getters'
import tagsview from './modules/tagsview'
import menu from './modules/menu'

export default createStore({
  modules: {
    user,
    permission,
    tagsview,
    menu
  },
  getters
})
