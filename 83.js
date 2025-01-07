// new keyword
// 1.) empty object {}
// 2.) return {}
// const user = Object.create(createUser.prototype); --> this line automatically create using this keyword


function createUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
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
const user1 = new createUser('Siddharth', 'Tamse', 'sidtamse7@gmail.com', '25', 'India');
const user2 = new createUser('Manju', 'Bhavi', 'manjubhavi7@gmail.com', '32', 'India');
console.log(user1);
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());
