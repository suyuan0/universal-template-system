<template>
  <div>
    <el-card class='headerCard'>
      <el-button type='primary'>打印</el-button>
    </el-card>
    <el-card class='main'>
      <h2>员工信息</h2>
      <table class='table-one'>
        <tbody>
        <tr>
          <th>姓名</th>
          <th>{{ userInfo.username }}</th>
          <th>性别</th>
          <th>{{ userInfo.gender }}</th>
          <th rowspan='5'>
            <img :src='userInfo.avatar' alt=''>
          </th>
        </tr>
        <tr>
          <th>民族</th>
          <th>{{ userInfo.nationality }}</th>
          <th>手机号</th>
          <th>{{ userInfo.mobile }}</th>
        </tr>
        <tr>
          <th>居住地</th>
          <th></th>
          <th>入职时间</th>
          <th>{{ $filters.deteFilter(userInfo.openTime) }}</th>
        </tr>
        <tr>
          <th>备注</th>
          <th colspan='4'>
            <el-tag v-for='(item,i) in userInfo.remark' :key='i' style='margin-right: 10px'>
              {{ item }}
            </el-tag>
          </th>
        </tr>
        <tr>
          <th>联系地址</th>
          <th colspan='4'>
            {{ userInfo.address }}
          </th>
        </tr>
        </tbody>
      </table>
      <table class='table-two'>
        <tr>
          <td>经历</td>
        </tr>
        <tr>
          <td class='context'>
            <p v-for='(item,i) in userInfo.experience' :key='i'>
              {{ $filters.deteFilter(item.startTime) }}
              ----
              {{ $filters.deteFilter(item.endTime) }}
              <span>{{ item.title }}</span>
              {{ item.desc }}
            </p>
          </td>
        </tr>
        <tr>
          <td>专业</td>
        </tr>
        <tr>
          <td>{{ userInfo.major }}</td>
        </tr>
        <tr>
          <td>荣耀</td>
        </tr>
        <tr>
          <td>{{ userInfo.glory }}</td>
        </tr>
      </table>
      <div class='footer'>签字：___________日期:___________</div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getUserDetailInfo } from '@/api/user'

const route = useRoute()
// 用户id
const userId = route.params.id
// 用户信息
const userInfo = ref({})
const getUserInfo = async () => {
  userInfo.value = await getUserDetailInfo(userId)
}
getUserInfo()
// 获取用户详情
</script>

<style lang='scss' scoped>
.headerCard {
  text-align: right;
  margin-bottom: 22px;
}

.main {
  text-align: center;

  .table-one, .table-two {
    width: 1024px;
    border-collapse: collapse;
    margin: 18px auto 0 auto;
  }

  .table-one {
    th {
      border: 1px solid #ebeef5;
      text-align: left;
    }

    tr {
      height: 40px;

      th {
        padding: 8px 11px;

        &:nth-of-type(1) {
          width: 209px;
        }

        &:nth-of-type(2) {
          width: 124px;
        }

        &:nth-of-type(3) {
          width: 215px;
        }

        &:nth-of-type(4) {
          width: 285px;
        }

        &:nth-of-type(5) {
          text-align: center;

          img {
            width: 146px;
            height: 160px;
            vertical-align: middle;
          }
        }

        &:nth-of-type(1), &:nth-of-type(3) {
          background: #f5f7fa;
        }

        &:nth-of-type(2), &:nth-of-type(4) {
          font-weight: 100;
        }
      }

    }
  }

  .table-two {
    tr {
      text-align: left;

      &:nth-of-type(1), &:nth-of-type(3), &:nth-of-type(4), &:nth-of-type(5), &:nth-of-type(6) {
        height: 40px;
      }

      &:nth-of-type(1), &:nth-of-type(3), &:nth-of-type(5) {
        background: #f5f7fa;
        font-weight: 600;
      }

      td {
        padding: 8px 11px;
        border: 1px solid #ebeef5;

      }
    }

    .context {
      p {
        &:nth-of-type(1) {
          margin-bottom: 5px;
        }

        span {
          margin: 0 62px !important;
        }
      }
    }
  }

  .footer {
    text-align: right;
    width: 1024px;
    margin: 50px auto 0 auto;
  }
}

</style>
