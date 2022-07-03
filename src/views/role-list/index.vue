<template>
  <el-card>
    <MyTable :cols='cols' :data='roleList'>
      <template v-slot:action='{row:{id}}'>
        <el-button size='small' type='primary' @click='getUserRole(id)'>分配权限</el-button>
      </template>
    </MyTable>
    <MyDialog :dialogVisible='dialogVisible' title='配置角色' @cancle='cancle' @handleColse='handleColse'>
      <el-tree :data='treeList' :default-checked-keys='defaultCheckedKeys' default-expand-all show-checkbox></el-tree>
    </MyDialog>
  </el-card>
</template>

<script setup>
import { getRoleList, getRolePermission } from '@/api/role'
import MyTable from '@/components/MyTable'
import { ref } from 'vue'
import MyDialog from '@/components/MyDialog'
import { MessageBox } from '@/utils/messageBox'

// 模态框的显示隐藏
const dialogVisible = ref(false)
// 默认选中的节点
const defaultCheckedKeys = ref([])
// 树形结构数据
const treeList = ref([
  {
    id: '1',
    label: '员工管理',
    children: [
      {
        id: '1-1',
        label: '分配角色'
      },
      {
        id: '1-2',
        label: '导入角色'
      },
      {
        id: '1-3',
        label: '删除员工'
      }
    ]
  },
  {
    id: '2',
    label: '角色列表',
    children: [
      {
        id: '2-1',
        label: '分配权限'
      }
    ]
  },
  {
    id: '3',
    label: '权限列表'
  },
  {
    id: '4',
    label: '文章排名'
  },
  {
    id: '5',
    label: '创建文章'
  }
])
const handleColse = async (value) => {
  await MessageBox('确定要关闭吗')
  value()
  dialogVisible.value = false
}
// 关闭模态框
const cancle = () => {
  dialogVisible.value = false
}
// 角色列表数据
const roleList = ref([])
// 获取角色列表
const getUserRoleList = async () => {
  roleList.value = await getRoleList()
}
// 获取指定角色的权限
const getUserRole = async (id) => {
  const data = await getRolePermission(id)
  dialogVisible.value = true
  defaultCheckedKeys.value = data
  // console.log(defaultCheckedKeys.value)
  // console.log(data)
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
getUserRoleList()
</script>

<style scoped>

</style>
