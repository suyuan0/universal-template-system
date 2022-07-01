// 封装messageBox方法

import { ElMessageBox } from 'element-plus'

export const MessageBox = async (name) => {
  await ElMessageBox.confirm(`确定要删除 ${name} 吗?`, {
    type: 'warning',
    draggable: true
  })
}
