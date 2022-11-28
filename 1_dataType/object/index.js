function getFullName(userEntity) {
    return "".concat(userEntity.firstname, " ").concat(userEntity.surname);
}
var user = {
    firstname: 'Дмитрий',
    surname: 'Ростунов',
    city: 'NN',
    age: 23
};
console.log(getFullName(user));
