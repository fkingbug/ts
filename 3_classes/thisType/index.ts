class UserBuilder {
  name: string

  //this - тип когда возврщаем этот объект
  setName(name: string): this {
    this.name = name
    return this
  }

  //typeguard проверяет является ли этот объект  AdminBuilder
  isAdmin(): this is AdminBuilder {
    return this instanceof AdminBuilder
  }
}

class AdminBuilder extends UserBuilder {
  roles: string[]
}

//UserBuilder
const res = new UserBuilder().setName('Vasya')

//AdminBuilder
const res2 = new AdminBuilder().setName('Vasya')

console.log(res2)

let user: UserBuilder | AdminBuilder = new UserBuilder()

//Если класс просто extendit и не добавляет новых полей , то компилятор в ранТайме не сможет их отличить и в if (UserBuilder | AdminBuilder) , else(never)
if (user.isAdmin()) {
  //let user: AdminBuilder
  console.log(user)
} else {
  //let user: UserBuilde
  console.log(user)
}
