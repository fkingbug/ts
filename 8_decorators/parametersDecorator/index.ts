interface IUserService {
  getUsersInDatabase(): number
}

class UserService implements IUserService {
  private _users: number
  getUsersInDatabase(): number {
    return this._users
  }
  setUsersInDatabase(@Positive() num: number): void {
    this._users = num
  }
}

function Positive() {
  return (
    target: Object, //UserService
    propertyKey: string | symbol, //setUsersInDatabase
    parametrIndex: number //Интекс аргумента
  ) => {
    console.log(target)
  }
}

//  setUsersInDatabase(@Positive() num: number , @Positive() num2: number): void {
//Вызываются декораторы справо на лево
