interface Role {
  name: string
}

interface Permission {
  endDate: Date
}

interface User {
  name: string
  roles: Role[]
  permission: Permission
}
const user: User = {
  name: 'Vasya',
  roles: [],
  permission: {
    endDate: new Date(),
  },
}

//Работа с значнием (с объектами )
// const badRole = 'roles'
// type badRolType = User[badRole]

//Работа с типами
const nameUser = user['name']
type rolesType = User['roles']
//or
const constRole = 'roles'
//c let работать не будет
let constRoleTwo: 'roles' = 'roles'
//так как константа без присвоения типа присваивает значение к типу и с лет можно явно присвоить тип как присваемое значение
type rolesType2 = User[typeof constRole]
type rolesType3 = User[typeof constRoleTwo]
//typeof конвертирует объект в тип

type roleType = User['roles'][number]
//[number] - указывает что необходимо обратиться к элементу массива array[0] 0 - number

//---
// as const

const roles = ['admin', 'user', 'super-user'] as const
//or
type roleTypes = typeof roles[number]
//const roles: readonly ["admin", "user", "super-user"] вместо string[]

//---
//Вложенный объект

type dateType = User['permission']['endDate']
//type Date
