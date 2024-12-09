// param destructuring 

// object
// react

const person = {
    firstName: "Siddharth",
    gender: "Male",
    age: 25
}

function printDetails(obj){
    console.log(obj.firstName);
    console.log(obj.gender);
    console.log(obj.age);
}
printDetails(person);


// we can do like this only
const person1 = {
    firstName: "Manju",
    gender: "Male",
    age: 25
}

function printDetails({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
printDetails(person1);
