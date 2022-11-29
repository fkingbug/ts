class User {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

const user = new User('Vasya')
console.log(user)
user.name = 'Petya'
console.log(user)

//--
//Eсли переменная проинициализированна (role) , но конструктор не примает значение для присвоения , нужно отключить в tsConfig - strictPropertyInitialization
//Это позволи в будущем дополнять объект(admin.role = 1)
class Admin {
  role: number
}
const admin = new Admin()
admin.role = 1

// strictPropertyInitialization - true - для обхода ошибки  нужно добавить (!) role!: number
// class Admin {
//   role!: number
//}
