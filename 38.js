// how to iterate object 

const person = {
    name: "Siddharth",
    age: 25,
    hobbies: ["Cricket", "Meditation", "Listening Music", "Traveling"]
}

for(let key in person){
    console.log(key);
}


// It is printing values

const person1 = {
    name: "Siddharth",
    age: 25,
    hobbies: ["Cricket", "Meditation", "Listening Music", "Traveling"]
}

for(let key in person1){
    console.log(person1[key]);
}


// using string templets

const person2 = {
    name: "Siddharth",
    age: 25,
    hobbies: ["Cricket", "Meditation", "Listening Music", "Traveling"]
}

for(let key in person2){
    console.log(`${key}: ${person2[key]}`);
}


// without using string templets
const person3 = {
    name: "Siddharth",
    age: 25,
    hobbies: ["Cricket", "Meditation", "Listening Music", "Traveling"]
}

for(let key in person3){
    console.log(key, ":", person3[key]);
}


// using object and check it is Array or not

console.log(Object.keys(person));
const val = Array.isArray((Object.keys(person)));
console.log(val);



//using for of loop

for(let keys of Object.keys(person)){
    console.log(person[keys]);
}