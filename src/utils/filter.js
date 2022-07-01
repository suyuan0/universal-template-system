import dayjs from 'dayjs'

const deteFilter = (val, format = 'YYYY-MM-DD') => {
  if (!isNaN(val)) {
    val = parseInt(val)
  }
  return dayjs(val).format(format)
}
export default (app) => {
  app.config.globalProperties.$filters = {
    deteFilter
  }
}
