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
  <el-pagination
    v-if='page.size'
    :currentPage='userModel.page'
    :page-size='userModel.size'
    :page-sizes='[5,10, 15, 20]'
    :total='total'
    layout='total, sizes, prev, pager, next, jumper'
    @size-change='(size)=>handleChangePagination("size",size)'
    @current-change='page=>handleChangePagination("page",page)'
  />
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  cols: {
    type: Array,
    default: () => []
  },
  total: Number,
  userModel: {
    type: Object,
    default: () => {
    }
  }
})
const emit = defineEmits(['input', 'change'])
const handleChangePagination = (type, value) => {
  const Person = {
    ...props.userModel,
    [type]: value
  }
  emit('input', Person)
  emit('change', Person)
}
const page = computed(() => {
  return props.userModel || {}
})
</script>

<style lang='scss' scoped>
.el-table {
  margin-bottom: 20px;
}

.el-pagination {
  ::v-deep(.el-input__wrapper) {
    box-shadow: none;
  }

  ::v-deep(.el-select .el-input.is-focus .el-input__wrapper) {
    box-shadow: none !important;
  }

  ::v-deep(.el-select .el-input__wrapper.is-focus) {
    box-shadow: none !important;
  }
}
</style>
