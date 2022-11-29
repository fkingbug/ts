"use strict";
class UserBuilder {
    //this - тип когда возврщаем этот объект
    setName(name) {
        this.name = name;
        return this;
    }
}
class AdminBuilder extends UserBuilder {
}
const res = new UserBuilder().setName('Vasya');
const res2 = new AdminBuilder().setName('Vasya');
console.log(res2);
