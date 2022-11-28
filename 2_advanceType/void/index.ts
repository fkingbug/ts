//void !== undefined , Функция ничего не возвращает
//Если хотябы что то функция возвращает (к примеру в if) то будет undefined иначе void (multiplyUndefinedOrNumber())

function logId(id: string | number): void {
  console.log(id)
}
const a = logId(1)

function multiplyUndefinedOrNumber(f: number, s?: number) {
  if (!s) {
    return f * f
  }
}

type voidFunc = () => void

const f1: voidFunc = () => {}
const f2: voidFunc = () => {
  return true
}

const b = f2()
//вернет void ? но мы это игнорируем ???

//case for void
//foreach возвращает void что дает возможность итерироваться

const skills = ['Dev', 'DevOps']

const user = {
  s: ['s'],
}
skills.forEach(skill => user.s.push(skill))
