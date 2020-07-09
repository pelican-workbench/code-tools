/**
 * 判断元素是不是dom元素
 * @param el HTMLElement
 */
export function isHTMLElement(el: HTMLElement | any): boolean {
  return el instanceof HTMLElement
}

/**
 * 判断元素是不是有某个className
 * @author zm
 * @param el HTMLElement
 * @param className string
 * @returns {boolean}
 */
export function hasClass(el: HTMLElement, className: string) {
  if (!isHTMLElement(el)) {
    console.error('传入的必须是一个dom元素')
    return false
  }
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
/**
 * 给某个元素添加className
 * @author zm
 * @param el HTMLElement
 * @param className string
 */
export function addClass(el: HTMLElement, className: string) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

/**
 *
 * @author zm
 * @param el HTMLElement
 * @param name string
 * @param val any
 */
export function getData(el: HTMLElement, name: string) {
  if (!isHTMLElement(el)) return
  const prefix = 'data-'
  return el.getAttribute(prefix + name)
}
