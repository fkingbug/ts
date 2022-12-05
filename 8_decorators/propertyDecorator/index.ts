interface IUserService {
  users: number
  getUsersInDatabase(): number
}
class UserService implements IUserService {
  @Max(100)
  users: number = 1000

  getUsersInDatabase(): number {
    throw new Error('Error')
  }
}

function Max(max: number) {
  return (
    target: Object, // UserService
    propertyKey: string | symbol //users
  ) => {
    let value: number

    //Переопределяем getter и setter класса UserService
    //
    const setter = function (newValue: number) {
      if (newValue > max) {
        console.log(`Нельзя установить значения больше ${max}`)
      } else {
        value = newValue
      }
    }
    const getter = function () {
      return value
    }
    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    })
    //Object.defineProperty :
    // *Объект куда дефайним проперти (target)
    // КЛюч проперти (propertyKey)
    //{}параметры
  }
}

const userService = new UserService()
userService.users = 1
console.log(userService.users)
userService.users = 10000
console.log(userService.users)

//до присвоение 1 выведет ошибку так как есть значение по умолчанию 1000в в инициализации класса
