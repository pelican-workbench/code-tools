const object = Object.prototype
const primitive = ['string', 'undefined', 'null', 'boolean', 'symbol', 'number']

export function getType(target: any): typeing {
  return object.toString
    .call(target)
    .slice(8, -1)
    .toLowerCase() as typeing
}

export function isString(target: any): target is string {
  return getType(target) === 'string'
}

export function isBoolean(target: any): target is boolean {
  return getType(target) === 'boolean'
}

export function isObject(target: any): target is object {
  return getType(target) === 'object'
}

export function isArray(target: any): target is Array<any> {
  return getType(target) === 'array'
}

export function isSymbol(target: any): target is Symbol {
  return getType(target) === 'symbol'
}

export function isFunction(target: any): target is Function {
  return getType(target) === 'function'
}

export function isDate(target: any): target is Date {
  return getType(target) === 'date'
}

export function isProimitive(target: any): boolean {
  if (isNaN(target)) return false
  const type = getType(target)
  return primitive.includes(type)
}
