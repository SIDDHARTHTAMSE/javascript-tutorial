// important array methods

const numbers = [4, 2, 5, 8];

function myFunc(number, index){
    console.log(`index is ${index} number is ${number}`);
}

for(let i=0; i<numbers.length; i++){
    myFunc(numbers[i], i);
}


// using foreach loop
const numbers1 = [1, 2, 3, 4];

function myFunc(number, index){
    console.log(`index is ${index} number is ${number}`);
}

numbers1.forEach(myFunc);



const numbers2 = [4, 5, 8, 2];

numbers2.forEach(function(number, index){
    console.log(`index is ${index} and number is ${number}`);
})



const numbers4 = [8, 2, 6, 2];

numbers4.forEach(function(number, index){
    console.log(number*2, index);
})


// Using foreach and Object
const users = [
    {firstName: "Siddharth", age: 24},
    {firstName: "Manju", age: 32},
    {firstName: "Yogesh", age: 25},
    {firstName: "Srushti", age: 22},
]

users.forEach(function(user){
    console.log(user.firstName);
});



// Using arrow function 
const users1 = [
    {firstName: "Siddharth", age: 24},
    {firstName: "Manju", age: 32},
    {firstName: "Yogesh", age: 25},
    {firstName: "Srushti", age: 22},
]

users1.forEach((user, index) => {
    console.log(user.firstName, index);
});
