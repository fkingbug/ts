type A = Awaited<Promise<string>> //string
type A2 = Awaited<Promise<Promise<string>>> //string
//Всегда возвращает финальный тип в generic ?

interface IMenu {
  name: string
  url: string
}

async function getMenu(): Promise<IMenu[]> {
  return [{ name: 'Аналитика', url: 'analytics' }]
}

type R = ReturnType<typeof getMenu> //Promise<IMenu[]>
type RA = Awaited<ReturnType<typeof getMenu>> //IMenu[]

//Более полная типизация
async function getArray<T>(x: T) {
  return [await x]
} //Promise<Awaited<T>[]>
// async function getArray<T>(x: T) : Promise<Awaited<T>[]> {
//   return [await x]
// } //Promise<Awaited<T>[]>
async function getArray2<T>(x: T): Promise<T[]> {
  return [await x] //Promise<T[]>
}
