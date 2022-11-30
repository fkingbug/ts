//НАследование  => paymentPersist  extends payment
//Композиция => engine and wheels => constructor Vehicle
//mexin => список и аккордион => Список аккордионов наследование от нескольких классов или добавление свойсв объекту без явного наследованияъ

type Constructor = new (...args: any[]) => {}
type GConstructor<T = {}> = new (...args: any[]) => T
//<T = {}> можно задать значение по умолчаниб для дженерика

class List {
  constructor(public items: string[]) {}
}

class Accordion {
  isOpened: boolean
}
type AccordionType = GConstructor<Accordion>
type ListType = GConstructor<List>

//руализация с наследованием
class ExtenedeListClass extends List {
  first() {
    return this.items[0]
  }
}

//Передаем в функцию класс
// function ExtenededList<TBase extends ListType>(Base: TBase) {
//   return class ExtendedList extends Base {
//     first() {
//       return this.items[0]
//     }
//   }
// }
// const list = ExtenededList(List)
// const res = new list(['first', 'setcode'])
// console.log(res.first())

// function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
//   return class ExtendedList extends Base {
//     first() {
//       this.isOpened
//       return this.items[0]
//     }
//   }
// }

// const list = ExtenededList(List) //error что передать ??? ниже
// const res = new list(['first', 'setcode'])
// console.log(res.first())

class AccordionList {
  isOpened: boolean
  constructor(public items: string[]) {}
}
function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
  return class ExtendedList extends Base {
    first() {
      this.isOpened
      return this.items[0]
    }
  }
}
//TBase extends ListType & AccordionType - наследуется от 2 классов и нужно передать класс который имеет в себе поля наследуемых классов
//Миксин дает тайп чекинг + возможность добавки функционала к наслежуемым классам
const list = ExtendedList(AccordionList)
const res = new list(['first', 'setcode'])
console.log(res.isOpened)
