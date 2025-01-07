// const userMethods = {
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return 'toon na na na la la';
//     }
// }

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
};
createUser.prototype.is18 = function(){
    return this.age >= 18;
};
createUser.prototype.sing = function(){
    return 'la la la la';
}
const user1 = createUser('Siddharth', 'Tamse', 'sidtamse7@gmail.com', '25', 'India');
const user2 = createUser('Manju', 'Bhavi', 'manjubhavi7@gmail.com', '32', 'India');
console.log(user1);
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());
