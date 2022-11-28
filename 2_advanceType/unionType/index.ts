//Union - в той или иной переменной могут хранится те или иные типы

function logId(id: string | number | boolean) {
  if (typeof id === 'string') {
    //сужение union типа до 1
    console.log(id.toLowerCase())
  } else if (typeof id === 'number') {
    console.log(id)
  } else {
    console.log(id)
  }
}

logId(1)
logId('log')
logId(true)

function logError(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(err)
  } else {
    console.log(err)
  }
}

function logObject(obj: { a: number } | { b: number }) {
  if ('a' in obj) {
    console.log(obj.a)
  } else {
    console.log(obj.b)
  }
}
function logMultipleIds(a: string | number, b: string | boolean) {
  if (a === b) {
  }
}
