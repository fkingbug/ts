function fetchWuthAuth(url: string, method: 'post' | 'get'): 1 | -1 {
  return 1
}

fetchWuthAuth('auth', 'get')

let method = 'post' // тип стринг
const subMethod = 'post' // тип post

//fetchWuthAuth('s', method) ошибка так как у фенкции тип 'post' | 'get',а у переменной стринг
fetchWuthAuth('auth', subMethod) // тип переменной post так как константы менять нельзя => тип = значению

//Обход через as

fetchWuthAuth('s', method as 'post')
// method = 3  Если переназначить метод  , то ts ошибок не даст , но могут быть ошибки при компиляции
