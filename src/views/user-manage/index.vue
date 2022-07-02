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
          {{ $filters.deteFilter(openTime) }}
        </template>
        <!--按钮-->
        <template v-slot:action='{row}'>
          <el-button size='small' type='primary' @click='ToViewUserInfo(row)'>查看</el-button>
          <el-button size='small' type='info' @click='ToViewUserRole(row)'>角色</el-button>
          <el-button size='small' type='danger' @click='handleDeleteUser(row)'>删除</el-button>
        </template>
      </MyTable>
    </el-card>
    <MyDialog :dialogVisible='dialogVisible' title='配置角色' @cancle='cancel'
              @determine='handleAssignRole' @handleColse='handleColse'>
      <el-checkbox-group v-model='userRole' @change='checkboxChange'>
        <el-checkbox label='超级管理员' />
        <el-checkbox label='管理员' />
        <el-checkbox label='人事经理' />
        <el-checkbox label='销售经理' />
        <el-checkbox label='保安队长' />
        <el-checkbox label='员工' />
      </el-checkbox-group>
    </MyDialog>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { getUserManageList, deleteUserList, getUserRole, AssignRolesToEmployees } from '@/api/user'
import { getRoleList } from '@/api/role'
import MyTable from '@/components/MyTable'
import MyDialog from '@/components/MyDialog'
import { MessageBox } from '@/utils/messageBox'
import { ElMessage } from 'element-plus'
import router from '@/router'
// 定义数据模型
const userModel = reactive({
  page: 1,
  size: 5
})
// 模态框的显示隐藏
const dialogVisible = ref(false)
// 表格数据
const data = ref([])
// 用户角色
const userRole = ref([])
// 角色数组
const roleArray = ref([])
// 角色列表
const roleList = ref([])
// 角色列表模型
const roleListModel = ref({
  id: '',
  roles: []
})
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
// 删除用户
const handleDeleteUser = async (row) => {
  await MessageBox(`确定要删除 ${row.username} 吗?`)
  await deleteUserList(row._id)
  await getUserList(userModel)
  ElMessage.success(`删除 ${row.username} 成功`)
}
// 查看用户信息
const ToViewUserInfo = (row) => {
  router.push(`/user/info/${row._id}`)
}
// 查看用户角色
const ToViewUserRole = async (row) => {
  const { role } = await getUserRole(row._id)
  const data = await getRoleList()
  dialogVisible.value = true
  roleList.value = data
  userRole.value = role.map(v => v.title)
  roleListModel.value.id = row._id
}
// 分配用户角色
const handleAssignRole = async () => {
  roleListModel.value.roles = []
  roleList.value.forEach(item => {
    userRole.value.forEach(v => {
      if (v === item.title) {
        roleListModel.value.roles.push(item)
      }
    })
  })
  const {
    id,
    roles
  } = roleListModel.value
  await AssignRolesToEmployees(id, roles)
}
const checkboxChange = (value) => {
  roleArray.value = value
}
// 关闭模态框
const handleColse = async (value) => {
  await MessageBox('确定要关闭吗')
  value()
  dialogVisible.value = false
}
const cancel = () => {
  dialogVisible.value = false
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
