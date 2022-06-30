<template>
  <template v-if='data.children && data.children.length>0'>
    <el-sub-menu :index='data.path'>
      <template #title>
        <el-icon>
          <svg-icon :icon='data.meta.icon' />
        </el-icon>
        <span>{{ data.meta.title }}</span>
      </template>
      <menu-item v-for='item in data.children' :key='item.path' :data='item' />
    </el-sub-menu>
  </template>
  <template v-if='data && !data.children'>
    <el-menu-item :index='data.path'>
      <el-icon>
        <svg-icon :icon='data.meta.icon' />
      </el-icon>
      <span>{{ data.meta.title }}</span>
    </el-menu-item>
  </template>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  data: {
    type: Object,
    default: () => {
    }
  }
})
</script>

<style scoped>

</style>
