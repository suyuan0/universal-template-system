<template>
  <div class='manage-container'>
    <el-card class='header'>
      <el-button type='primary'>excel 导入</el-button>
      <el-button type='success'>excel 导出</el-button>
    </el-card>
    <el-card></el-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { getUserManageList } from '@/api/user'
// 定义数据模型
const userModel = reactive({
  page: 1,
  size: 10
})
const getUserList = async () => {
  const data = await getUserManageList(userModel)
  console.log(data)
}
getUserList()
</script>

<style lang='scss' scoped>
.manage-container {
  .header {
    height: 74px;
    text-align: right;
    margin-bottom: 22px;
  }
}
</style>
