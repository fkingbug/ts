class UserService {
  static db: any
  static getUser(id: number) {
    return this.db.findById(id)
  }
  static async getUser2(id: number) {
    return this.db.findById(id)
  }
  create() {
    UserService.db
  }
  static {
    UserService.db = 'sdf'
  }
}
UserService.db

//Статические поля могут быть вызываны без создания инстанса класса
//После создания инстанса класса (const inst = new UserService()) теряется доступ к статическим полям
// class UserService {
//   static db: any
// }
// UserService.db
