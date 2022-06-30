<template>
  <el-dropdown trigger='click' @command='handelCommand'>
    <el-avatar v-if='avatar' :shape='shape' :src='avatar'></el-avatar>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for='item in props.dropdownList' :key='item.id' :command='item.command'
                          :divided='item.divided'>
          {{ item.title }}
        </el-dropdown-item>
        <!--        <el-dropdown-item command='profile'>首页</el-dropdown-item>-->
        <!--        <el-dropdown-item command='home'>课程主页</el-dropdown-item>-->
        <!--        <el-dropdown-item command='exit' divided>退出登录</el-dropdown-item>-->
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
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
