//infer оператор
function runTransaction(transaction: { fromTo: [string, string] }) {
  console.log(transaction)
}

const transaction = {
  //fromTo: ['1', '2'] error
  fromTo: ['1', '2'] as [string, string],
}

runTransaction(transaction)

type GetFirstArg<T> = T extends (first: infer First, ...args: any[]) => any ? First : never
//Берем любую функцию => Берем ее первый аргнумент => с помощью infer вытаскиваем 1 аргумент и ег опередаем => если не extends (T иможет и не быть) поэтому never
//Если у либы плохие типы то можно вытащить тип с помощью infer
