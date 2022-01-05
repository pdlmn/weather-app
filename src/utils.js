const addErrorHandler = (errHandler, fn) => (...params) => fn(...params).catch(errHandler)

export { addErrorHandler }
