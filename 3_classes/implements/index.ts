//Имплементация позволяет отделить реализацию  от имплеметации на которую пологаться в всем коде и чтобы наделить класс свойствами

interface ILogger {
  log(...args: string[]): void
  error(...args: string[]): void
}

class Logger implements ILogger {
  log(...args: string[]): void {
    throw new Error('Method not implemented.')
  }
  error(...args: string[]): void {
    throw new Error('Method not implemented.')
  }
}

//Имплементация поволяет перенести методы из интерфейса в класс с помощью ide (ctsl + s)
// interface ILogger {
//   log: (...args) => void
//   error(...args): void
// }

// class Logger implements ILogger {
//   log: (...args: any[]) => void
//   error(...args: any[]): void {
//     throw new Error('Method not implemented.')
//   }
// }

//------
//pay(paymentId: number | string) - можно расширить type (Добавить юнион тип к number ) , но изменить на другой тип нельзя
interface IPayable {
  pay(paymentId: number): void
  price?: number
}
interface IDeletable {
  delete(): void
}
class User implements IPayable, IDeletable {
  delete(): void {
    throw new Error('Method not implemented.')
  }
  pay(paymentId: number | string): void {
    throw new Error('Method not implemented.')
  }
  price?: number | undefined
}
