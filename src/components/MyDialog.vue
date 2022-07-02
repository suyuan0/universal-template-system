<template>
  <el-dialog :before-close='handleColse' :model-value='dialogVisible' :title='title'>
    <slot></slot>
    <template #footer>
      <span class='dialog-footer'>
        <el-button @click='cancle'>取消</el-button>
        <el-button type='primary' @click='determine'>确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  dialogVisible: Boolean,
  title: String
})
const emits = defineEmits(['handleColse', 'cancle', 'determine'])
const handleColse = (value) => {
  emits('handleColse', value)
}
const cancle = () => {
  emits('cancle')
}
const determine = () => {
  emits('determine')
}
</script>

<style scoped>

</style>
