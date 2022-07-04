<template>
  <el-breadcrumb :separator=' breadcrumData[0].path ==="/" ? "":"/" '>
    <template v-for='(item,i) in breadcrumData' :key='i'>
      <el-breadcrumb-item :to='{path:item.path}'>{{ item.meta.title }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const breadcrumData = computed(() => {
  return route.matched
})
</script>

<style lang='scss' scoped>
.el-breadcrumb {
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  margin-left: 10px;
}
</style>
