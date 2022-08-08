export declare function type<T extends unknown>(value: T): string;
export declare namespace type {
    var prototype: TypeProto;
}
interface TypeProto {
    isObject: <T extends unknown>(val: T) => boolean;
    isFunction: <T extends unknown>(val: T) => boolean;
    isArray: <T extends unknown>(val: T) => boolean;
    isSymbol: <T extends unknown>(val: T) => boolean;
    isFalse: <T extends never>(val: T) => boolean;
}
declare function isObject<T extends unknown>(val: T): boolean;
declare function isFunction<T extends unknown>(val: T): boolean;
declare function isArray<T extends unknown>(val: T): boolean;
declare function isSymbol<T extends unknown>(val: T): boolean;
export default type;
export { isObject, isFunction, isArray, isSymbol };
