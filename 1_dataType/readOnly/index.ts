const skill: readonly [number, string] = [1, 'Dev']
const skills: readonly string[] = ['Dev', 'DevOps']

//const не запрещает модифицировать массивы , то readonly перед типом запрещает модифицировать массив
//Картеж readonly и его нельзя модифицировать

const skillGeneric: Array<string> = ['Dev', 'DevOps']
const skillGenericReadOnly: ReadonlyArray<string> = ['Dev', 'DevOps']
