//--interface

//1 - merge interface
// type так не может
interface User {
  name: string
}
interface User {
  age: number
}

let objUser: User = {
  name: 'qwe',
  age: 15,
}

//--Type

//1 юнион и интресепшен типы только в type
//interface не является простым типом , а содержит их
type ID = string | number

interface IDI {
  ID: string | number
}

//type - примитывные типы , в остальных случаях interface
