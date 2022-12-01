interface IUser {
  name: string
  age: number
}
type keysOfUser = keyof IUser

const key: keysOfUser = 'age'

//T - тип полученного объекта , K - поле полученного объекта
function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}
const user: IUser = {
  name: 'Вася',
  age: 30,
}

// const userName = getValue(user , 'names') //error так как нету поля names в IUser
const userName = getValue(user, 'name')
