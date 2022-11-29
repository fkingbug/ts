let a = 5
let b: string = a.toString()

let c = 'hello'
let d: number = parseInt(c)
let e: number = parseFloat(c)

let f: string = new String(a).valueOf()
//valueof() забирает значение из объекта String

let g: boolean = new Boolean(a).valueOf()

interface User {
  name: string
  email: string
  login: string
}

const user: User = {
  name: 'Vasiliy',
  email: 'vasiliy@yandex.ru',
  login: 'vasia',
}
const user2 = {
  name: 'Vasiliy',
  email: 'vasiliy@yandex.ru',
  login: 'vasia',
} as User

//user3 - так не стоит  делать
const user3 = <User>{
  name: 'Vasiliy',
  email: 'vasiliy@yandex.ru',
  login: 'vasia',
}

interface Admin {
  name: string
  role: number
}
// не рекомендуется передавать целый объект когда нужно передать не все поля , при компиляции могу произойти разные исходы
//Так как мы имеем доступ к полям name и role , но под капотом email и login будут
const admin: Admin = {
  ...user,
  role: 1,
}

//-- Возможная реализация (Maping)

function userToAdmin(user: User): Admin {
  return {
    name: user.name,
    role: 1,
  }
}
