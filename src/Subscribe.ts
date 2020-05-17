export default class Subscribe implements CodeTools.ISubscribe {
  public handlers: CodeTools.Handler = {}
  public on(name: string, listener: Function): void {
    if (typeof listener !== 'function') {
      throw new TypeError('"listener" must be a function')
    }
    const group = this.handlers[name]
    if (!group) {
      this.handlers[name] = []
    }
    this.handlers[name].push(listener)
  }
  public emit(name: string, ...arg: any[]) {
    const group: Function[] = this.handlers[name]
    if (!group || group.length < 1) return
    group.forEach((listener: Function) => {
      listener.apply(null, arg)
    })
  }
  public off(name: string, listener: Function | undefined) {
    let subscribe: Function[] | undefined = this.handlers[name]
    if (!listener) {
      this.handlers[name] = []
      return
    }
    if (Array.isArray(subscribe)) {
      let len = subscribe.indexOf(listener)
      if (len > -1) {
        subscribe.splice(len, 1)
      }
    }
  }
}
