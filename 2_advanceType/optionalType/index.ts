//Опциональный тип (?) не равeн undefined(string | undefined)
// Если тип undefined ане опциональный то нужно передать значение в объект
// В функцуи опциональные типы = undefined

interface User {
  login: string
  password?: string
}
const user: User = {
  login: 'test@test.ru',
}

function multiply(first: number, second?: number): number {
  if (!second) {
    return first * first
  }
  return first * second
}

interface userPro {
  login: string
  password?: {
    type: 'primary' | 'secondary'
  }
}

function testPass(user: userPro) {
  const z = user.password?.type
  //or
  const x = user.password ? user.password.type : undefined
  const с = user.password!.type
  //(?) undefined или значение
  //(!) - точно не undefined
}

function test(param?: string) {
  const t = param ?? multiply(5)
}
