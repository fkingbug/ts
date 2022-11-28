//Typles - картеж
const skill: [number, string] = [1, 'Dev']
const id = skill[0]
const skillname = skill[1]

//в массиве может хранится только 2 элемента число и строка

//const notWorking  = skill[2]
//Нельзя обратиться к 3 элементу , так как в типе указано только 2 элемента

//Методы в ранТайме  ( push , pop и тд )можно использовать но обращаться можно будет только к 0 и 1 элементу

const [idTwo, skillNameTwo] = skill
//idTwo = 1
//skillNameTwo = 'Dev

const dynamicArray: [number, string, ...boolean[]] = [1, 'pdf', true, true]
//Такая запист позволяет добавлять boolean элементы , но Порядок важен
//Данные опциональные
