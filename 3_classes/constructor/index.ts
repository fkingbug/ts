//class принимает - generic , а constructor нет
//Нельзя задать конструтору возвращаемый тип , так как он возращает "сущность класса"
class User {
  name: string
  //constructor имплементации
  constructor(name: string) {
    this.name = name
  }
}
const user = new User('Vasya')

//constructor - функция которая возвращает инстанс класса и принимающая набор параметров

//--
//overLoad constructor

class User2 {
  name: string
  constructor()
  //constructor реализации ?
  constructor(name: string)
  constructor(name?: string) {
    if (typeof name === 'string') {
      this.name = name
    }
  }
}

const user2 = new User2()

console.log(user2)

//---
//Класс с 3 перезагрузками (пустой , имя , возраст) Последний конструктор должен по своей структуре удволетворять конструкторы выше
class User3 {
  name: string
  age: number

  constructor()
  constructor(name: string)
  constructor(age: number)
  constructor(ageOrName?: string | number) {
    if (typeof ageOrName === 'string') {
      this.name = ageOrName
    } else if (typeof ageOrName === 'number') {
      this.age = ageOrName
    }
  }
}

const user3 = new User3(33)

console.log(user3)

//---
//Если очень много перегрузок то проще сделать статичные методы которые будут дополнять объект
class User4 {
  name: string
  age: number

  constructor()
  constructor(name: string)
  constructor(age: number)
  constructor(name: string, age: number)
  constructor(ageOrName?: string | number, age?: number) {
    if (typeof ageOrName === 'string') {
      this.name = ageOrName
    } else if (typeof ageOrName === 'number') {
      this.age = ageOrName
    }
    if (typeof age === 'number') {
      this.age = age
    }
  }
}

const user4 = new User4('Vasya', 33)

console.log(user4)
