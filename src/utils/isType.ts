export const isNull = (targe:any) => toString.call(targe) === '[object Null]'
export const isObject = (targe:any) => toString.call(targe) === '[object Object]'
export const isNumber = (targe:any) => toString.call(targe) === '[object Number]'
export const isString = (targe:any) => toString.call(targe) === '[object String]'
export const isUndefined = (targe:any) => toString.call(targe) === '[object Undefined]'
export const isBoolean = (targe:any) => toString.call(targe) === '[object Boolean]'
export const isArray = (targe:any) => toString.call(targe) === '[object Array]'
export const isFunction = (targe:any) => toString.call(targe) === '[object Function]'
