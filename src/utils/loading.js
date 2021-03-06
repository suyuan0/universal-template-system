// 引入loading
import { ElLoading } from 'element-plus'

// Loading加载处理
const loading = {
  loadingInstance: null,
  //   开启Loading
  open() {
    if (this.loadingInstance === null) {
      this.loadingInstance = ElLoading.service({
        target: 'body',
        background: 'rgba(0,0,0,0.4)'
      })
    }
  },
  //   关闭loading
  close() {
    if (this.loadingInstance !== null) {
      this.loadingInstance.close()
      this.loadingInstance = null
    }
  }
}

export default loading
