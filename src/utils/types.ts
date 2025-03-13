export function type<T>(value: T): string {
  const target = Object.prototype.toString.call(value)
  const type = target.replace(new RegExp('(^[[a-z]+ )([A-Za-z]+)(])', 'g'), '$2').toLowerCase()
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

prototype['isObject'] = isObject
prototype['isFunction'] = isFunction
prototype['isArray'] = isArray
prototype['isSymbol'] = isSymbol
prototype['isFalse'] = isFalse

type.prototype = prototype

export default type

export { isObject, isFunction, isArray, isSymbol }
