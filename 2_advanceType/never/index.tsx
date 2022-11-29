//never - когда функция никогда не вернет ничего
//никогда не вернся , рекурсия , while true , если в switch case обрабатываются все сценарии , то все что в default = never , never показывает в какие ветки не зайду
//vтипу never нельзя ничего присвоить
//void можно присвоить undefined

function genereateError(message: string): never {
  throw new Error(message)
}

function duimpError(): never {
  while (true) {}
}
function rec() {
  return rec()
}

type paymentAction = 'refund' | 'checkout'

function processAction(action: paymentAction) {
  switch (action) {
    case 'refund':
      //...
      break
    case 'checkout':
      //...
      break
    default:
      const _: never = action
      throw new Error('Net takogo action')
  }
}
//---
//Так как функция должна вернуть boolean , но если нужно выдать ошибку => never , то уберет ошибку ( так как нужно обязательно вернуть boolean ,
// если нету нужного условия то вернется undefined (функция будет с ошибкой))

function isString(x: string | number): boolean {
  if (typeof x === 'string') {
    return true
  } else if (typeof x === 'number') {
    return false
  }
  genereateError('error')
}
