"use strict";
//порядок важен
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let UserServiced = class UserServiced {
    constructor() {
        this.users = 1000;
    }
    getUsersInDatabase() {
        return this.users;
    }
};
UserServiced = __decorate([
    log(),
    setUsers(2)
], UserServiced);
function setUsers(users) {
    console.log('setUsers init');
    return (target) => {
        console.log('setusers run');
        target.prototype.users = users;
    };
}
function log() {
    console.log('log init');
    return (target) => {
        console.log(target);
        console.log('ruuun');
    };
}
function setUserAdvanced(users) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.users = users;
            }
        };
    };
}
console.log(new UserServiced().getUsersInDatabase());
//инициализируются в 1 порядке , выполняются в другом
//@setUsers(2)
// @log()
// setUsers init
// log init
// ruuun
// setusers run
// 1000
//------
// @log()
// @setUsers(2)
// log init
// setUsers init
// setusers run
// ruuun
// 1000
