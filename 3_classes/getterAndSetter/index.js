"use strict";
class User {
    set login(l) {
        this._login = 'user-' + l;
    }
    get login() {
        return 'no-log';
    }
}
const user = new User();
user.login = 'myLogin';
console.log(user);
//перед переменными у которых есть getter и setter нужно поставить(_login: string)
//setter имет тип того , что возвращает getter
