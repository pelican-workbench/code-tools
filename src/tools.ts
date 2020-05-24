/**
 * @author zm
 * @param  source 目标对象
 * @param  path 访问对象的路径
 * @param  defaultValue 默认参数
 */
type Path = string | number
export function getIn<T>(source: any, path: Path[], defaultValue?: T): T | undefined {
  if (source === null || source === undefined) {
    return defaultValue
  }
  if (!Array.isArray(path)) return defaultValue
  if (path.length < 1) return defaultValue
  const first: Path = path[0]
  if (source[first] === null || source[first] === undefined) return defaultValue
  const arr = path.slice(1)
  try {
    return arr.reduce((res: any, key: Path) => {
      res = res[key]
      return res
    }, source[first]) as T
  } catch (e) {
    return defaultValue
  }
}

export const identity = function(item: any) {
  return item
}

/**
 * @desc 判断是不是空对象
 * @author zm
 * @param target 对象或者数组
 * @return boolean
 */
export function isEmpty(target: object | Array<any>): boolean {
  if (typeof target === 'object') {
    if (Array.isArray(target)) {
      return target.length < 1
    }
    return Object.keys(target).length < 1
  }
  return false
}
