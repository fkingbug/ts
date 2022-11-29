"use strict";
//class принимает - generic , а constructor нет
class User {
    //constructor имплементации
    constructor(name) {
        this.name = name;
    }
}
const user = new User('Vasya');
//constructor - функция которая возвращает инстанс класса и принимающая набор параметров
//--
//overLoad constructor
class User2 {
    constructor(name) {
        if (typeof name === 'string') {
            this.name = name;
        }
    }
}
const user2 = new User2();
console.log(user2);
//---
//Класс с 3 перезагрузками (пустой , имя , возраст) Последний конструктор должен по своей структуре удволетворять конструкторы выше
class User3 {
    constructor(ageOrName) {
        if (typeof ageOrName === 'string') {
            this.name = ageOrName;
        }
        else if (typeof ageOrName === 'number') {
            this.age = ageOrName;
        }
    }
}
const user3 = new User3(33);
console.log(user3);
//---
//Если очень много перегрузок то проще сделать статичные методы которые будут дополнять объект
class User4 {
    constructor(ageOrName, age) {
        if (typeof ageOrName === 'string') {
            this.name = ageOrName;
        }
        else if (typeof ageOrName === 'number') {
            this.age = ageOrName;
        }
        if (typeof age === 'number') {
            this.age = age;
        }
    }
}
const user4 = new User4('Vasya', 33);
console.log(user4);
