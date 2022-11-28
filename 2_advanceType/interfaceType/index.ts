interface User {
  name: string
  age: number
  skills: string[]

  log: (id: number) => string
}

// interface Role {
//   roleId: number
// }

// interface UserWithRole extends User, Role {}

//-- OR

interface UserWithRole extends User {
  roleId: number
  createdAt: Date
}

let user: UserWithRole = {
  name: 'qwe',
  age: 33,
  skills: ['1', '2'],
  roleId: 1,
  createdAt: new Date(),

  log(id) {
    return ''
  },
}

//Типизация словарь  пользователей {1:user1 , 2: user2, ...}
//Ключ поля в объекте число , а значение User

interface UserDic {
  [index: number]: User
}
