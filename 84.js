function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
};
CreateUser.prototype.is18 = function(){
    return this.age >= 18;
};
CreateUser.prototype.sing = function(){
    return 'la la la la';
}
const user1 = new CreateUser('Siddharth', 'Tamse', 'sidtamse7@gmail.com', '25', 'India');
const user2 = new CreateUser('Manju', 'Bhavi', 'manjubhavi7@gmail.com', '32', 'India');

for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}