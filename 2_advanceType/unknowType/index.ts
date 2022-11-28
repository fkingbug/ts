//unknow - что то есть но мы не знаем что там
// unknow !== any

let input: unknown

input = 3
input = ['sf', 'sdf']

//let res: string = input
//Тип "unknown" не может быть назначен для типа "string"(тип any можно присвоить)
//Тип any позволил бы присваивание

function run(i: unknown) {
  if (typeof i === 'number') {
    i++
    // unknown меняется на другой тип только после явной поверки
  } else {
    i
  }
}
run(input)

async function getData() {
  try {
    await fetch('')
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
  }
}
async function getDataForce() {
  try {
    await fetch('')
  } catch (error) {
    const e = error as Error
    console.log(e.message)
  }
}
//Если юнион тип и unknown то будет unknown
type U1 = unknown | string

//-- интерсекшен unknown и любой другой тип , даст другой тип
type i1 = unknown & string
