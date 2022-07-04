<template>
  <el-menu
    :default-active='$route.path'
    active-text-color='#fff'
    background-color='#304156'
    router
    text-color='#bfcbd9'
    unique-opened
  >
    <menu-item
      v-for='item in props.menu'
      :key='item.id'
      :data='item'
    />
  </el-menu>
</template>

<script setup>
import { defineProps } from 'vue'
import MenuItem from './MenuItem'

const props = defineProps({
  menu: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang='scss' scoped>
.el-menu {
  border-right: none;
}
</style>
