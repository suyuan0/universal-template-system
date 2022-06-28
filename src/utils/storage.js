// 定义存储的方法
const storage = window.localStorage

/**
 * 存储数据
 * @param key
 * @param data
 */
export const setItem = (key, data) => {
  if (typeof data === 'object') {
    storage.setItem(key, JSON.stringify(data))
  } else {
    storage.setItem(key, data)
  }
}

/**
 * 获取数据
 * @param key
 * @returns {string|any}
 */
export const getItem = (key) => {
  const data = storage.getItem(key)
  try {
    return JSON.parse(data)
  } catch {
    return data
  }
}

/**
 * 删除单个数据
 * @param key
 */
export const removeItem = (key) => {
  storage.removeItem(key)
}

/**
 * 删除所有数据
 */
export const removeAllItem = () => {
  storage.clear()
}
