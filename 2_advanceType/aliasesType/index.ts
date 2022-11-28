type httpMethod = 'post' | 'get'

type coolString = string

function fetchWuthAuth(url: string, method: httpMethod) {}

fetchWuthAuth('auth', 'get')

//---

type User = {
  name: string
  age: number
  skills: string[]
}

let user: User = {
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
}

//-- Интерсепшен - объединение типов

type Role = {
  id: number
}
type UserWithRole = User & Role

let objUserWithRole: UserWithRole = {
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
  id: 12,
}

//-- Возможная реализация

type secondartUserWidthRole = {
  user: User
  role: Role
}
