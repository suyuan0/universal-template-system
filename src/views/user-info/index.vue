<template>
  <div>
    员工信息
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { getUserDetailInfo } from '@/api/user'

const route = useRoute()
// 用户id
const userId = route.params.id
const getUserInfo = async () => {
  const data = await getUserDetailInfo(userId)
  console.log(data)
}
getUserInfo()
// 获取用户详情
</script>

<style scoped>

</style>
