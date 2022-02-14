export function type<T extends unknown>(value: T): string {
  const target = Object.prototype.toString.call(value);
  const type = target
    .replace(new RegExp("(^[[a-z]+ )([A-Za-z]+)(])", "g"), "$2")
    .toLowerCase();
  return type;
}

interface TypeProto {
  isObject: <T extends unknown>(val: T) => boolean;
  isFunction: <T extends unknown>(val: T) => boolean;
  isArray: <T extends unknown>(val: T) => boolean;
  isSymbol: <T extends unknown>(val: T) => boolean;
  isFalse: <T extends never>(val: T) => boolean;
}

const prototype: TypeProto = Object.create(null);

function isObject<T extends unknown>(val: T): boolean {
  return type(val) === "object";
}
function isFunction<T extends unknown>(val: T): boolean {
  return type(val) === "function";
}
function isArray<T extends unknown>(val: T): boolean {
  return type(val) === "array";
}
function isSymbol<T extends unknown>(val: T): boolean {
  return type(val) === "symbol";
}

function isFalse<T extends never>(val: T): boolean {
  return [0, undefined, null].includes(val);
}

prototype["isObject"] = isObject;
prototype["isFunction"] = isFunction;
prototype["isArray"] = isArray;
prototype["isSymbol"] = isSymbol;
prototype["isFalse"] = isFalse;

type.prototype = prototype;

export default type;

export { isObject, isFunction, isArray, isSymbol };
