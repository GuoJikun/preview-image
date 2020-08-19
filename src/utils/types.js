export function type(value) {
    const target = Object.prototype.toString.call(value);
    const type = target.replace(new RegExp("(^[[a-z]+ )([A-Za-z]+)(])", "g"), "$2").toLowerCase();
    return type === "number" ? (isNaN(value) ? "NaN" : "number") : type;
}

const prototype = Object.create(null);

function isObject(val) {
    return type(val) === "object";
}
function isFunction(val) {
    return type(val) === "function";
}
function isArray(val) {
    return type(val) === "array";
}
function isSymbol(val) {
    return type(val) === "symbol";
}

function isFalse(val) {
    return val === 0 || val === undefined || val === null || val === false;
}

prototype[isObject] = isObject;
prototype[isFunction] = isFunction;
prototype[isArray] = isArray;
prototype[isSymbol] = isSymbol;
prototype[isFalse] = isFalse;

type.prototype = prototype;

export default type;

export { isObject, isFunction, isArray, isSymbol };
