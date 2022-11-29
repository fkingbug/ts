class User {
  _login: string
  password: string
  createAt: Date

  set login(l: string) {
    this._login = 'user-' + l
    this.createAt = new Date()
  }

  async getPassword(p: string) {}
  get login() {
    return this._login
  }
}
const user = new User()
user.login = 'myLogin'
console.log(user)

//перед переменными у которых есть getter и setter нужно поставить(_login: string)
//setter имет тип того , что возвращает getter (Если явно не указать)
//getter и setter не могут быть async
//для асинхронного кода необходимо создавать асинхронный метод
