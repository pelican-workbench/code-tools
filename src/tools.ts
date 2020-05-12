/**
 * @author zm
 * @param  source 目标对象
 * @param  path 访问对象的路径
 * @param  defaultValue 默认参数
 */
export function getIn<T>(source:any,path:string[],defaultValue:T): T {
  if(source === null || source === undefined) {
    return  defaultValue;
  }
  if(path.length < 1) return  defaultValue;
  const first:string = path[0];

  try {
   return  (path.reduce((res:any,key:string)=>{
     res = res[key];
     return res;
    },source[first])) as T
  }catch (e) {
    return defaultValue
  }
}
