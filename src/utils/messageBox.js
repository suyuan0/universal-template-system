// 封装messageBox方法

import { ElMessageBox } from 'element-plus'

export const MessageBox = async (name) => {
  await ElMessageBox.confirm(name, {
    type: 'warning',
    draggable: true
  })
}
