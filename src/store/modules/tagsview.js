import { setItem, getItem } from '@/utils/storage'
import { tags } from '@/utils/constCon'

export default {
  namespaced: true,
  state: () => ({
    TagsView: getItem(tags) || []
  }),
  mutations: {
    setTagsView(state, view) {
      const tagsView = state.TagsView.find((item) => item.path === view.path)
      if (!tagsView) {
        state.TagsView.push(view)
        setItem(tags, state.TagsView)
      }
    },
    removeTags(state, i) {
      state.TagsView.splice(i, 1)
      setItem(tags, state.TagsView)
    }
  }
}
