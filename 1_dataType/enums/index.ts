//enum - перечисление , в js компилируется как функция
enum StatusCode {
  SUCCESS = 1,
  IN_PROCESS = 'p',
  FAILED = 3,
}
const res = {
  message: 'Платеж успешен',
  statusCode: StatusCode.SUCCESS,
}

// 1 - Успех
// 'p - В процессе
// 3 - Отклонен

if (res.statusCode === StatusCode.SUCCESS) {
}

function action(status: StatusCode) {}
action(StatusCode.SUCCESS)
action(1)

//числовой enum - если не указывать значения полей enum - то каждому enum будет присвоенно число начиная с 0
//Гетерогенный enum - разные значения enum но числа передавать в функции можно а строки нет
//action('p') - ошибка
//action(2) - не ошибка , так как пепрвый элемент enum имеет значение 1 , а второй 'p' (то можно обращаться к 2 enum как 2  , но не как к 'p')

function compute() {
  return 3
}

enum Role {
  ADMIN = 1,
  SuperAdmun = ADMIN * 2,
  USER = compute(),
}
//можно помещать функции в enum (которые компилируются в ранТайме , не асинхронные запросы)

//---
//Enum Ведет себя кк объект

function test(x: { ADMIN: number }) {}

test(Role)

//---
//Константный enum
const enum enumRole {
  ADMIN = 1,
  NEADMIN = 2,
}
// Константные enum не являются функциями , там где они используются появляется знаечние и коментарий (имя поля enum)
//Удобно если большие enum и не переберать функции (обычный enum) , а просто сделать consts
