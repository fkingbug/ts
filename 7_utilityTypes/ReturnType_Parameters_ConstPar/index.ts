class User {
  constructor(public id: number, public name: string) {}
}

function getData(id: number): User {
  return new User(id, 'Vasya')
}

//ReturnType - тип возвращения функции
type RT = ReturnType<typeof getData> //User

//---
//Parameters - тип картеда принимаемых параметров функции
type PT = Parameters<typeof getData> //[id: number]
type first = PT[0] //number
//or
//type PT = Parameters<typeof getData>[0]

//-
type RT2 = ReturnType<() => void> //void
type RT3 = ReturnType<<T>() => T> //unknown
type RT4 = ReturnType<<T extends string>() => T> //string

//---
//Картеж параметров которых нужно передать в конструктор
type CP = ConstructorParameters<typeof User> //[id: number, name: string]

//---
//InstanceType возвращает инстанс
type IT = InstanceType<typeof User>
