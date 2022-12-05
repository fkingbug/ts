interface IUserService {
  getUsersInDatabase(): number
}

class UserService implements IUserService {
  private _users: number
  @Log()
  set users(num: number) {
    this._users = num
  }
  get users() {
    return this._users
  }
  getUsersInDatabase(): number {
    throw new Error('Method not implemented.')
  }
}

function Log() {
  return (target: Object, _: string | symbol, desctiptor: PropertyDescriptor) => {
    //старый сеттер
    const set = desctiptor.set
    //переопределили старого сетт
    desctiptor.set = (...args: any) => {
      console.log(args)
      //вызов старого сеттера с темеже аргументами
      set?.apply(target, args)
    }
  }
}
// Записывать декораторы(@log) нужно только для акссесора(перед первым аксессором)(геттер или сеттер) и он будет отрабатывать на обоих
