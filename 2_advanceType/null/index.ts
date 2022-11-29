const n: null = null
const n1: any = null
// const n2: number = null
// const n3: string = null
// const n4: boolean = null
// const n5: undefined = null

//--
// nyll можно присвоить только типу null и any
// если  выключить "strictNullChecks": false  в tsconfig , то можно присвоить типам выше

interface User {
  name: string
}

function getUser() {
  if (Math.random() > 0.5) {
    return null
  } else {
    return {
      name: 'Vasiliy',
    }
  }
}

const user = getUser()

if (user) {
  const n55 = user.name
}

//"strictNullChecks": false - разрешает обращаться к возможному undefined - лучше не включать
// null - явный возврат ничего
// undefined - в рантайме не было найдено
