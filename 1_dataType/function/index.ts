function getFullName(fristname: string, surname: string): string {
  // if (typeof fristname !== 'string') {
  //   throw new Error('GGS')
  // }
  return `${fristname} ${surname}`
}
const getFullNameArrow = (fristname: string, surname: string): string => {
  return `${fristname} ${surname}`
}
console.log(getFullName('true', 'false'))
