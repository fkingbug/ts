interface User {
  name: string
  email: string
  login: string
}

const user: User = {
  name: 'Vasya',
  email: 'vasy@yandex.ru',
  login: 'vasia',
}

interface Admin {
  name: string
  role: number
}

function logId(id: string | number) {
  if (isString(id)) {
    console.log(id)
  } else {
    console.log(id)
  }
}

//x is string - вернет boolean является ли переменная string
function isString(x: string | number): x is string {
  return typeof x === 'string'
}

//---
//есть ли role в  user , появляются подсказки после использования type guard и функции не асинхронные

function idAdmin(user: User | Admin): user is Admin {
  return 'role' in user
}
function idAdminAlternative(user: User | Admin): user is Admin {
  return (user as Admin).role !== undefined
}

function setRole(user: User | Admin) {
  if (idAdmin(user)) {
    user.role = 0
  } else {
    throw new Error('Пользователь не админ')
  }
}
