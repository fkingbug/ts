interface IData {
  group: number
  name: string
}

const data: IData[] = [
  { group: 1, name: 'a' },
  { group: 1, name: 'b' },
  { group: 2, name: 'c' },
]

// {
//   '1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
//   '2': [ { group: 2, name: 'c' } ]
// }

interface IGroup<T> {
  [key: string]: T[]
}

type key = string | number | symbol

function grouping<T extends Record<key, any>>(array: T[], key: keyof T): IGroup<T> {
  return array.reduce<IGroup<T>>((map: IGroup<T>, item) => {
    const itemKey = item[key]
    let curEl = map[itemKey]
    if (Array.isArray(curEl)) {
      curEl.push(item)
    } else {
      curEl = [item]
    }
    map[itemKey] = curEl
    return map
  }, {})
}
grouping<IData>(data, 'group')
console.log(grouping<IData>(data, 'group'))
