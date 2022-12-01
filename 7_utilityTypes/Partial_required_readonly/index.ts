interface User {
  name: string
  age?: number
  email: string
}

//Partial - Делает все поля не обязательными
type partial = Partial<User>

//Required - все поля обязательные
type required = Required<User>

//Readonly - все поля readonly
type readonly = Readonly<User>

//Комбинирование
type requiredAndReadonly = Required<Readonly<User>>
