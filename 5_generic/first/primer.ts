const number: Array<number> = [1, 2, 3]

async function tesdt() {
  //Возвращает число
  const a = await new Promise<number>((resolve, reject) => {
    resolve(1)
  })
}

const check: Record<string, boolean> = {
  //string имя поля , boolean - флаг
  drive: true,
  kpp: false,
}

function logMiddleware<T>(data: T): T {
  console.log(data)
  return data
}

const res = logMiddleware<number>(10) // type - number
// const resCosnt = logMiddleware(10) type - 10

function getSplitedHalf<T>(data: Array<T>): Array<T> {
  const l = data.length / 2
  return data.splice(0, 1)
}
getSplitedHalf([1, 2, 3, 4]) // Array<number>
getSplitedHalf<number>([1, 2, 3, 4]) //Array<number>

//---

function toString<T>(data: T): string | undefined {
  if (Array.isArray(data)) {
    return data.toString()
  }
  switch (typeof data) {
    case 'string':
      return data
    case 'number':
    case 'symbol':
    case 'bigint':
    case 'boolean':
    case 'boolean':
    case 'function':
      return data.toString()
    case 'object':
      return JSON.stringify(data)
    default:
      return undefined
  }
}

console.log(toString(1))
console.log(toString('223'))
console.log(toString(true))
console.log(toString([1, 2, 3, 4, 5]))
console.log(toString({ name: 'qwe' }))

const solit: <T>(data: Array<T>) => Array<T> = getSplitedHalf

interface ILoLine<T> {
  timeStamp: Date
  date: T
}
type LogLineType<Y> = {
  timeStamp: Date
  date: Y
}
const logLine: ILoLine<{ a: number }> = {
  timeStamp: new Date(),
  date: {
    a: 1,
  },
}
