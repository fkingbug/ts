const a1: number = Math.random() > 0.5 ? 1 : 0
interface HTTPResponse<T extends 'success' | 'failed'> {
  code: number
  data: T extends 'success' ? string : Error
  // additionalData: string | number
}

const suc: HTTPResponse<'success'> = {
  code: 200,
  data: 'done',
}
const err: HTTPResponse<'failed'> = {
  code: 200,
  data: new Error(),
}

class User {
  id: number
  name: string
}

class UserPersistend extends User {
  dbId: string
}

//Перегрузка
function getUser(id: number): User
function getUser(dbId: string): UserPersistend
function getUser(dbIdOrId: string | number): User | UserPersistend {
  if (typeof dbIdOrId === 'number') {
    return new User()
  } else {
    return new UserPersistend()
  }
}

//---
// Без перегрузки

type UserOrUserPersistend<T extends string | number> = T extends number ? User : UserPersistend

function getUser2<T extends string | number>(id: T): UserOrUserPersistend<T> {
  if (typeof id === 'number') {
    // return new User()  Error
    return new User() as UserOrUserPersistend<T>
    //явное определение что User принадлежит UserOrUserPersistend
  } else {
    return new UserPersistend()
  }
}

const user = getUser2(1)
//const user: User
const userPersistend = getUser2('sadsadasdas')
//const userPersistend: UserPersistend
