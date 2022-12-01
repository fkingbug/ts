interface PaymentPersistent {
  id: number
  sum: number
  from: string
  to: string
}

//Omit - убирает ненужные типы
type Payment = Omit<PaymentPersistent, 'id'>
type PaymentAnyOmit = Omit<PaymentPersistent, 'id' | 'from'>

//Pick - берет только нужные нам поля
type PaymentRequisits = Pick<PaymentPersistent, 'sum' | 'to'>

//--
//Extract - вытаскивает из юнион типа('from' | 'to' | Payment) только те типы которые подходят по условию (string)
type ExtractEx = Extract<'from' | 'to' | Payment, string> // "from" | "to"

//Exclude исключаем из юнион типа('from' | 'to' | Payment) только те типы которые подходят по условию (string)
type ExcludeEx = Exclude<'from' | 'to' | Payment, string>
