 declare namespace CodeTools {
  type Ikey<H> = keyof H;
  interface Handler{
    [key:string]:Function[]
  }
  interface ISubscribe {
    on:(name:string,listener:Function)=>void
    off:(name:string,listener:Function)=>void
    emit:(name:string,...arg:any[])=>void
  }
}
type typeing = 'string' | 'number' | 'null' | 'object' | 'array' | 'promise'| 'set' | 'date' | 'symbol' |'map' | 'weakmap' | 'regexp' | 'weakset' | 'undefined' | 'boolean' | 'function'
