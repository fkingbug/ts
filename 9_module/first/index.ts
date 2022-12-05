//module A {
//or
//export  namespace A  - для обычного слова import
namespace A {
  export const a = 5

  export interface B {
    c: number
  }
}
//namespace - обертка позволяющая инкопсюлировать в себя логику
//export обязательно

//console.log(A.a) - будет ошибка

//--
//Чтобы не было ошибки нужно оставить в файле путь до namespace и под комментарием использовать

/// <reference path="путь до namespace">
console.log(A.a)
