//Наследование - зависимость класса от другого принимая все его методы и свойства

type PaymentStatus = 'new' | 'paid'

class Payment {
  id: number
  status: PaymentStatus = 'new'

  constructor(id: number) {
    this.id = id
  }

  pay() {
    this.status = 'paid'
  }
}

//Если необходимо сделать в наследуемом клаассе похожый метод , то нужно расширить (override) старый (pay()  => pay(date?: Date))
//override - покажет если метод удалился из исходого класса

class PersistedPayment extends Payment {
  dataBaseId: number
  paidAt: Date

  constructor() {
    const id = Math.random()
    super(id)
  }
  save() {}
  //override меттолд
  override pay(date?: Date) {
    // this.status = 'paid'
    super.pay() // правильная запись
    if (date) {
      this.paidAt = date
    }
  }
}

//---
//Порядок вызовом конструкторов

class User {
  name: string = 'user'

  constructor() {
    console.log(this.name)
  }
}

class Admin extends User {
  name: string = 'admin'

  constructor() {
    super()
    console.log(this.name)
  }
}

const x = new Admin()

class HttpError extends Error {
  code: number
  constructor(message: string, code?: number) {
    super(message)
    this.code = code ?? 500
  }
}
