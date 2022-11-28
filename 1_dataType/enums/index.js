"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode["IN_PROCESS"] = "p";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res = {
    message: 'Платеж успешен',
    statusCode: StatusCode.SUCCESS,
};
// 1 - Успех
// 'p - В процессе
// 3 - Отклонен
if (res.statusCode === StatusCode.SUCCESS) {
}
function action(status) { }
action(StatusCode.SUCCESS);
action(1);
//числовой enum - если не указывать значения полей enum - то каждому enum будет присвоенно число начиная с 0
//Гетерогенный enum - разные значения enum но числа передавать в функции можно а строки нет
//action('p') - ошибка
//action(2) - не ошибка , так как пепрвый элемент enum имеет значение 1 , а второй 'p' (то можно обращаться к 2 enum как 2  , но не как к 'p')
function compute() {
    return 3;
}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["SuperAdmun"] = 2] = "SuperAdmun";
    Role[Role["USER"] = compute()] = "USER";
})(Role || (Role = {}));
//можно помещать функции в enum (которые компилируются в ранТайме , не асинхронные запросы)
//---
//Enum Ведет себя кк объект
function test(x) { }
test(Role);
