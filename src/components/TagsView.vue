<template>
  <div class='TagsView'>
    <ul>
      <li v-for='(item,i) in tagList' :key='item.id' :class='{active:$route.path === item.path}'
          class='tags' @click='handleToPath(item.path)'>
        {{ item.title }}
        <span v-if='$route.path !== item.path' @click.stop='closeTags(i)'>
          <svg-icon className='close-icon' icon='close' />
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()
const route = useRoute()
watch(() => router.currentRoute.value.path, (toPath) => {
  if (route.meta && route.meta.title && route.path) {
    const obj = {
      path: toPath,
      title: route.meta.title
    }
    store.commit('tagsview/setTagsView', obj)
  }
}, {
  immediate: true
})
const tagList = computed(() => {
  return store.getters.TagsView
})
const closeTags = (i) => {
  store.commit('tagsview/removeTags', i)
}
const handleToPath = (path) => {
  router.push(path)
}
</script>

<style lang='scss' scoped>
.TagsView {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%),
  0 0 3px 0 rgb(0 0 0 / 4%)
}

.tags {
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 26px;
  line-height: 26px;
  border: 1px solid #d8dce5;
  color: #495060;
  background: #fff;
  padding: 0 8px;
  font-size: 12px;
  margin-left: 5px;
  margin-top: 4px;
}

.active {
  background: rgb(48, 65, 86);
  color: #fff;
}

span {
  line-height: 26px;
}

::v-deep(.close-icon) {
  font-size: 15px;
}
</style>
