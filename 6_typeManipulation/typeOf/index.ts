let strOrNum: string | number

if (Math.random() > 0.5) {
  strOrNum = 5
} else {
  strOrNum = 'str'
}

//strOrNum - из за рандома type string | number

if (typeof strOrNum === 'string') {
  console.log(strOrNum)
} else {
  console.log(strOrNum)
}

let str2OrNum: typeof strOrNum

const user = {
  name: 'Vasya',
}
type keyOfuser = keyof typeof user
//typeof переводит user в type и keyof забирает ключи

enum Direction {
  Up,
  Down,
}
type d = keyof typeof Direction
//type d = "Up" | "Down"
