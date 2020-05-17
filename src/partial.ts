/**
 * @desc 函数的柯里化
 * @author zm
 * @param func Function
 */
export function curry(func: Function) {
  return function curried(...args: any[]) {
    if (args.length >= func.length) {
      return func.apply(null, args)
    } else {
      //提供参数小于函数参数，返回偏函数
      return function pass(...args2: any[]) {
        return curried.apply(null, args.concat(args2))
      }
    }
  }
}
