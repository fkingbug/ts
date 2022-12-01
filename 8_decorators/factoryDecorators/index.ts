interface IUserService {
  users: number
  getUsersInDatabase(): number
}

@setUsers(2) // если не убрать значение по умолчанию , то значение не поменяется(1000)
@setUserAdvanced(4) //установит значение 4 даже если заранее стоит 1000 по умолчанию
class UserService implements IUserService {
  users: number = 1000
  getUsersInDatabase(): number {
    return this.users
  }
}
function threeUserAdvanced<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    users = 3
  }
}
console.log(new UserService().getUsersInDatabase())

//Фабрика дераторов котораясоздает декораторы с определенными свойствамии

function setUsers(users: number) {
  return (target: Function) => {
    target.prototype.users = users
  }
}
//----

function setUserAdvanced(users: number) {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      users = users
    }
  }
}
