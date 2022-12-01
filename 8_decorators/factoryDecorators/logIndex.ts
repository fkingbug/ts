//порядок важен

interface IUserServiceLog {
  users: number
  getUsersInDatabase(): number
}
@log()
@setUsers(2)
class UserServiced implements IUserServiceLog {
  users: number = 1000
  getUsersInDatabase(): number {
    return this.users
  }
}

function setUsers(users: number) {
  console.log('setUsers init')
  return (target: Function) => {
    console.log('setusers run')
    target.prototype.users = users
  }
}

function log() {
  console.log('log init')
  return (target: Function) => {
    console.log(target)
    console.log('ruuun')
  }
}

function setUserAdvanced(users: number) {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      users = users
    }
  }
}
console.log(new UserServiced().getUsersInDatabase())

//инициализируются в 1 порядке , выполняются в другом

//@setUsers(2)
// @log()
// setUsers init
// log init
// ruuun
// setusers run
// 1000

//------
// @log()
// @setUsers(2)
// log init
// setUsers init
// setusers run
// ruuun
// 1000
