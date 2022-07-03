<template>
  <el-card>
    <MyTable :cols='cols' :data='roleList'>
      <template v-slot:action=''>
        <el-button size='small' type='primary'>分配权限</el-button>
      </template>
    </MyTable>
  </el-card>
</template>

<script setup>
import { getRoleList } from '@/api/role'
import MyTable from '@/components/MyTable'
import { ref } from 'vue'
// 角色列表数据
const roleList = ref([])
// 获取角色列表
const getuserRoleList = async () => {
  const data = await getRoleList()
  roleList.value = data
}
// 表格列
const cols = [
  {
    title: '序号',
    name: 'id',
    width: 100
  },
  {
    title: '名称',
    name: 'title'
  },
  {
    title: '描述',
    name: 'describe'
  },
  {
    title: '操作',
    slot: 'action',
    width: 300
  }
]
getuserRoleList()
</script>

<style scoped>

</style>
