// для поддержки декораторов в tsconfig поставить флаг true => "experimentalDecorators": true
interface IUserService {
  users: number
  getUsersInDatabase(): number
}

@threeUserAdvanced
class UserService implements IUserService {
  users: number = 1000
  getUsersInDatabase(): number {
    return this.users
  }
}

//Декоратор который отрабатывает до обработки классов (сначало присваивается 0 из декоратора , а потом присваивается 1000 в классе)
// function nullUser(target: Function) {
// на этапе инициализации класса в прототив добавляется 0 , а потом на 1000
//   target.prototype.users = 0
// }
//-----------
//-----------
//аннонимный класс наследуется от получаемого и изменяет его
//Такая запись декораторов позволяет дать классу отработатьи только потом изменить
function threeUserAdvanced<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    users = 3 // на этапе насоедования меняем на 3
  }
}
console.log(new UserService().getUsersInDatabase())
