const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  TagsView: (state) => state.tagsview.TagsView,
  isCollapse: (state) => state.menu.isCollapse
}

export default getters
