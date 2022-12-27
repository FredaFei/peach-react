export class LocalStorage{
  static getReadWelcomes(){
    return window.localStorage.getItem('hasReadWelcomes')
  }
  static setReadWelcomes(value:string){
      window.localStorage.setItem('hasReadWelcomes', value)
  }
}
