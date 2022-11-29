class Payment {
  private date: Date = new Date()

  //this : Payment - подсказка для ts что контекст пропал
  getDate(this: Payment) {
    return this.date
  }
  //у стрелочных функций нету контекста и они ссылаются на контекс класса и поэтому bind не нужен
  getDateArrow = () => {
    return this.date
  }
}

const p = new Payment()

const user = {
  id: 1,
  paymentDate: p.getDate.bind(p),
  paymentDateArrow: p.getDateArrow,
}

console.log(p.getDate())
console.log(user.paymentDate())
console.log(user.paymentDateArrow())

//p.getDate - ссылается на контекст  user и не видит конткест класса - вывод undefuned
//p.getDate.bind(p) - чтобы обратиться к контексту класса нужно в bind передать экземпляр класса

// class Payment {
//   private date: Date = new Date()

//   getDate() {
//     return this.date
//   }
// }

// const p = new Payment()

// const user = {
//   id: 1,
//   paymentDate: p.getDate.bind(p),
// }

class PaymentPersistent extends Payment {
  save() {
    //так как после наследования  стрелочные функции не видны
    // return super.getDateArrow()
    return this.getDateArrow()
  }
}

console.log(new PaymentPersistent().save())
