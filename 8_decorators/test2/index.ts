interface IUserService {
  users: number
  getUsersInDatabase(): number
}

class UserService implements IUserService {
  users: number = 10000
  @Catch({ rethrow: true })
  getUsersInDatabase(): number {
    throw new Error('Error')
  }
}

// function Catch(rethrow: boolean = false) {
function Catch({ rethrow }: { rethrow: boolean } = { rethrow: true }) {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    const method = descriptor.value
    descriptor.value = async (...args: any[]) => {
      try {
        return await method?.apply(target, args)
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message)
          if (rethrow) {
            throw e
          }
        }
      }
    }
  }
}

console.log(new UserService().getUsersInDatabase())

//async await чтобы асинхронные функции тоже поддерживались
