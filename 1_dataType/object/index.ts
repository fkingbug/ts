function getFullName(userEntity: { firstname: string; surname: string }): string {
  return `${userEntity.firstname} ${userEntity.surname}`
}

const user = {
  firstname: 'Дмитрий',
  surname: 'Ростунов',
  city: 'NN',
  age: 23,
  skills: {
    dev: true,
    devops: false,
  },
}
console.log(getFullName(user))
