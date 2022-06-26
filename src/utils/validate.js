// 怕末端是否位外部资源
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
