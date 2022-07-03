<template>
  <el-card>
    <MyTable :cols='cols' :data='permissionList'></MyTable>
  </el-card>
</template>

<script setup>
import MyTable from '@/components/MyTable'
import { ref } from 'vue'
import { getPermission } from '@/api/permission'
// 权限列表数据
const permissionList = ref([])
const getPermissionList = async () => {
  permissionList.value = await getPermission()
}
getPermissionList()
// 表格列
const cols = [
  {
    title: '权限名称',
    name: 'permissionName',
    width: 180
  },
  {
    title: '权限标识',
    name: 'permissionMark',
    width: 180

  },
  {
    title: '权限描述',
    name: 'permissionDesc'
  }
]
</script>

<style scoped>

</style>
