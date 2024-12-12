// methods
// function inside object

const person = {
    firstName: "Siddharth",
    age: 25,
    about: function(){
        console.log(`Person name is ${this.firstName} and age is ${this.age}`);
    }
}
person.about();

// using only this keyword
const person1 = {
    firstName: "Siddharth",
    age: 25,
    about: function(){
        console.log(this);
    }
}
person1.about();

// Uisng one or more objects
function personInfo(){
    console.log(`Person name is ${this.firstName} and age is ${this.age}`);
}

const person2 = {
    firstName: "Siddharth",
    age: 15,
    about: personInfo
}
const person3 = {
    firstName: "Srushti",
    age: 22,
    about: personInfo
}
const person4 = {
    firstName: "Manju",
    age: 32,
    about:personInfo
}

person2.about();
person3.about();
person4.about();