 declare namespace CodeTools {
  type Ikey<H> = keyof H;
  interface Handler{
    [key:string]:Function[]
  }
  interface ISubscribe {
    handlers:Handler,
    on:(name:string,listener:Function)=>void
    off:(name:string,listener:Function)=>void
    emit:(name:string,...arg:any[])=>void
  }
}
