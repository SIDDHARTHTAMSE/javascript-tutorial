// Maps 
// map is iterable

// store data in ordered fashion

// store key value pair(like object)
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key 
// like array, number, string

// object literal
// key -> string (99.99 all are string in object)
// key -> symbol 

const person = {
    firstName: "Siddharth",
    age: 7,
    1: "one"
}
console.log(person.firstName);
console.log(person["firstName"]);
console.log(person[1]);

for(let key in person){
    console.log(key);
    console.log(typeof key);
}



// key value pair using Map

const person1 = new Map();
person1.set('firsName', 'Siddharth');
person1.set('age', 25);
person1.set(1, 'one');
// person1.set([1,2,3,4]);
// person1.set({1: 'one'}, 'onetwothree');

console.log(person1);
console.log(person1.get(1));
console.log(person1.keys())

for(let key of person1.keys()){
    console.log(key, typeof key);
}

//destructure
for(let [key, value] of person1){
    console.log(key, value);
}



const person2 = new Map([['firstName', 'Manju'], ['age', 32]]);
console.log(person2);

// To add elements in object using Map
const person3 = {
    id: 3,
    firstName: "Yogesh"
}

const person4 = {
    id: 4,
    firstName: "Nimesh"
}

const extraInfo = new Map();
extraInfo.set(person3, {age: 26, gender: "male"});
extraInfo.set(person4, {age: 45, gender: "Male"});

console.log(extraInfo);
console.log(extraInfo.get(person3).gender);
console.log(extraInfo.get(person4).gender);