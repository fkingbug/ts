"use strict";
//Наследование - зависимость класса от другого принимая все его методы и свойства
class Payment {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
//Если необходимо сделать в наследуемом клаассе похожый метод , то нужно расширить (override) старый (pay()  => pay(date?: Date))
//override - покажет если метод удалился из исходого класса
class PersistedPayment extends Payment {
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() { }
    //override меттолд
    pay(date) {
        // this.status = 'paid'
        super.pay(); // правильная запись
        if (date) {
            this.paidAt = date;
        }
    }
}
//---
//Порядок вызовом конструкторов
class User {
    constructor() {
        this.name = 'user';
        console.log(this.name);
    }
}
class Admin extends User {
    constructor() {
        super();
        this.name = 'admin';
        console.log(this.name);
    }
}
const x = new Admin();
