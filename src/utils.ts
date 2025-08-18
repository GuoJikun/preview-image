export type ToolType =
  | 'zoom-out'
  | 'zoom-in'
  | 'contraRotate'
  | 'clockwiseRotation'
  | 'download'

export const downloadFile = (url: string, name: string) => {
  const a = document.createElement('a')
  a.download = name
  a.href = url
  a.style.display = 'none'
  document.body.append(a)
  a.click()
  const timer = setTimeout(() => {
    a.remove()
    clearTimeout(timer)
  }, 10)
}

/**
 * 获取滚动条的宽度
 */
export const getScrollWidth = () => {
  const scroll = document.createElement('div')
  const scrollIn = document.createElement('div')
  scroll.append(scrollIn)
  scroll.style.width = '100px'
  scroll.style.height = '50px'
  scroll.style.overflow = 'scroll'
  scroll.style.marginLeft = '-100000px'
  document.body.append(scroll)
  const scrollInWidth = scrollIn.offsetWidth
  const scrollWidth = scroll.offsetWidth
  const tmp = setTimeout(() => {
    scroll.remove()
    clearTimeout(tmp)
  }, 10)
  return scrollWidth - scrollInWidth
}

export function type<T>(value: T): string {
  const target = Object.prototype.toString.call(value)
  const type = target
    .replaceAll(/(^[[a-z]+ )([A-Za-z]+)(\])/g, '$2')
    .toLowerCase()
  return type
}

interface TypeProto {
  isObject: <T>(val: T) => boolean
  isFunction: <T>(val: T) => boolean
  isArray: <T>(val: T) => boolean
  isSymbol: <T>(val: T) => boolean
  isFalse: <T extends never>(val: T) => boolean
}

const prototype: TypeProto = Object.create(null)

function isObject<T>(val: T): boolean {
  return type(val) === 'object'
}
function isFunction<T>(val: T): boolean {
  return type(val) === 'function'
}
function isArray<T>(val: T): boolean {
  return type(val) === 'array'
}
function isSymbol<T>(val: T): boolean {
  return type(val) === 'symbol'
}

function isFalse<T extends never>(val: T): boolean {
  return [0, undefined, null].includes(val)
}

prototype.isObject = isObject
prototype.isFunction = isFunction
prototype.isArray = isArray
prototype.isSymbol = isSymbol
prototype.isFalse = isFalse

type.prototype = prototype

export { isArray, isFunction, isObject, isSymbol }

// eslint-disable-next-line import/no-default-export
export default type
