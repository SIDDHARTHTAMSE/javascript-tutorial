// for in loop in array 

const fruits = ["apple", "mango", "grapes", "Orange"];

for(let index in fruits){    // for in loop will print index values
    console.log(fruits[index]);
}

// using toUpperCase and push

const fruits1 = ["apple", "mango", "grapes", "Orange"];
const fruits2 = [];

for(let index in fruits1){
    fruits2.push(fruits1[index].toUpperCase());
}
console.log(fruits2);