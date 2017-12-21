class Stub {
  constructor (obj, methodName) {
    this.obj = obj
    this.methodName = methodName
    this.originalMethod = obj[methodName].bind(obj)
  }

  returns (value) {
    this.obj[this.methodName] = () => value
    return this
  }

  restore () {
    this.obj[this.methodName] = this.originalMethod
    return this
  }

  resolves (value) {
    this.obj[this.methodName] = () => Promise.resolve(value)
    return this
  }
}

export const stub = (obj, methodName) => {
  return new Stub(obj, methodName)
}
