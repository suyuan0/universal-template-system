<template>
  <el-dialog :model-value='dialogVisible' :title='title'>
    <slot></slot>
    <template #footer>
      <span class='dialog-footer'>
        <el-button>取消</el-button>
        <el-button type='primary'>确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  dialogVisible: Boolean,
  title: String
})
</script>

<style scoped>

</style>
