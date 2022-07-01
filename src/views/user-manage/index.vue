<template>
  <div class='manage-container'>
    <el-card class='header'>
      <el-button type='primary'>excel 导入</el-button>
      <el-button type='success'>excel 导出</el-button>
    </el-card>
    <el-card>
      <MyTable v-model:userModel='userModel' :cols='column' :data='data' :total='tal' @change='change'>
        <!--头像-->
        <template v-slot:avatar='{row:{avatar}}'>
          <el-avatar :size='60' :src='avatar'></el-avatar>
        </template>
        <!--角色-->
        <template v-slot:role='{row:{role}}'>
          <el-tag v-for='item in role' :key='item.id' style='margin-right: 6px'>
            {{ item.title }}
          </el-tag>
        </template>
        <!--开通时间-->
        <template v-slot:time='{row:{openTime}}'>
          {{ openTime }}
        </template>
        <!--按钮-->
        <template v-slot:action=''>
          <el-button size='small' type='primary'>查看</el-button>
          <el-button size='small' type='info'>角色</el-button>
          <el-button size='small' type='danger'>删除</el-button>
        </template>
      </MyTable>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { getUserManageList } from '@/api/user'
import MyTable from '@/components/MyTable'
// 定义数据模型
const userModel = reactive({
  page: 1,
  size: 5
})
// 表格数据
const data = ref([])
// 条数
const tal = ref(0)
const getUserList = async (model) => {
  const {
    list,
    total,
    page
  } = await getUserManageList(model)
  userModel.page = page - 0
  data.value = list
  tal.value = total
}
getUserList(userModel)
const change = async (Person) => {
  await getUserList(Person)
}
// 定义表格的列
const column = [
  {
    title: '#',
    type: 'index'
  },
  {
    title: '姓名',
    name: 'username'
  },
  {
    title: '联系方式',
    name: 'mobile'
  },
  {
    title: '头像',
    slot: 'avatar',
    align: 'center'
  },
  {
    title: '角色',
    slot: 'role'
  },
  {
    title: '开通时间',
    slot: 'time'
  },
  {
    title: '操作',
    slot: 'action'
  }
]
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
