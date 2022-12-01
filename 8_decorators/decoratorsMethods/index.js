"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class UserService {
    constructor() {
        this.users = 1000;
    }
    getUsersInDatabase() {
        throw new Error('Error');
    }
}
__decorate([
    log()
], UserService.prototype, "getUsersInDatabase", null);
function log() {
    return (target, propertyKey, descriptor) => {
        console.log(target); //{}
        console.log(propertyKey); // getUsersInDatabase
        console.log(descriptor);
        //{
        //   value: [Function: getUsersInDatabase],
        //   writable: true, Значение свойства можно менять (если true)
        //   enumerable: false, свойство учавствует в перечеслении(если true)
        //   configurable: true   Можно удалять и изменять define properties
        // }
        //-----
        // descriptor.value = () => {
        //   //переопределение метода
        //   console.log('no error') // Замена throw new Error на   console.log('no error')
        // }
        //-----
        //Сохранение старой функции
        // const oldValue = descriptor.value
        descriptor.value = () => {
            console.log('qwewqe');
            // oldValue()
        };
        //---
        // return {
        //   enumerable : true
        // }
    };
}
console.log(new UserService().getUsersInDatabase());
