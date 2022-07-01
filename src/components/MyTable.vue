<template>
  <el-table
    :data='data'
    border
    stripe>
    <el-table-column
      v-for='(item,i) in cols'
      :key='i'
      :align='item.align'
      :label='item.title'
      :prop='item.name'
      :type='item.type'
      :width='item.width'
    >
      <template v-if='item.slot' v-slot='{ row, column, $index}'>
        <slot :column='column' :index='$index' :name='item.slot' :row='row'></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  data: {
    type: Array,
    default: () => []
  },
  cols: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>

</style>
