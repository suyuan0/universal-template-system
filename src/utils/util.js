/**
 * 封装深拷贝方法
 * @param {Object | Array} data
 */
const getDataType = (data) => {
  const dataType = Object.prototype.toString.call(data)
  const typePerson = {
    '[object Object]': 'object',
    '[object Array]': 'array',
    '[object String]': 'string',
    '[object Number]': 'number',
    '[object Null]': 'null',
    '[object Undefined]': 'undefined',
    '[object Function]': 'function',
    '[object Symbol]': 'symbol',
    '[object Date]': 'date',
    '[object RegExp]': 'regexp'
  }
  return typePerson[dataType]
}

const deepCopy = (data) => {
  const type = getDataType(data)
  let Person = null
  if (type === 'array') {
    Person = []
    data.forEach((item) => Person.push(deepCopy(item)))
  } else if (type === 'object') {
    Person = {}
    for (const key in data) {
      Person[key] = deepCopy(data[key])
    }
  } else {
    return data
  }
  return Person
}

export default {
  deepCopy
}
