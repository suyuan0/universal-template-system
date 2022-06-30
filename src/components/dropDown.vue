<template>
  <el-dropdown trigger='click' @command='handelCommand'>
    <el-avatar v-if='avatar' :shape='shape' :src='avatar'></el-avatar>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for='item in dropdownList' :key='item.id' :command='item.command' :divided='item.divided'>
          {{ item.title }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  avatar: {
    type: String,
    default: ''
  },
  shape: {
    type: String,
    default: 'square'
  },
  dropdownList: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['command'])
const handelCommand = (command) => {
  emit('command', command)
}
</script>

<style scoped>

</style>
