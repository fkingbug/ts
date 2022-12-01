interface IUserService {
  users: number
  getUsersInDatabase(): number
}
class UserService implements IUserService {
  users: number = 1000

  @log()
  getUsersInDatabase(): number {
    throw new Error('Error')
  }
}

function log() {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    console.log(target) //{}
    console.log(propertyKey) // getUsersInDatabase
    console.log(descriptor)
    //{
    //   value: [Function: getUsersInDatabase],
    //   writable: true, Значение свойства можно менять (если true)
    //   enumerable: false, свойство учавствует в перечеслении(если true)
    //   configurable: true   Можно удалять и изменять define properties
    // }

    //-----
    // descriptor.value = () => {
    //   //переопределение метода
    //   console.log('no error') // Замена throw new Error на   console.log('no error')
    // }

    //-----

    //Сохранение старой функции
    // const oldValue = descriptor.value
    descriptor.value = () => {
      console.log('qwewqe')
      // oldValue()
    }

    //---
    // return {
    //   enumerable : true
    // }
  }
}
console.log(new UserService().getUsersInDatabase())
