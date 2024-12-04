// objects reference type 
// arrays are good but not sufficient
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create object

const person = {
    name: "Siddharth",
    age: 25,
    hobbies: ["Cricket", "Meditation", "Listening Music", "Traveling"]
}

console.log(person);

// how to access data from object 

console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

// how to add key value pair to ojects

person.gender = "Male";
console.log(person);