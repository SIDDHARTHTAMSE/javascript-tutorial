// for loop array 

let fruits = ["apple", "mango", "grapes", "banana"];

for(let i=0; i<=fruits.length-1; i++){
    console.log(fruits[i]);
}

// toUpperCase
let fruits1 = ["apple", "mango", "grapes", "banana"];

for(let i=0; i<=fruits1.length-1; i++){
    console.log(fruits1[i].toUpperCase());
}


let fruits2 = [];

for(let i=0; i<=fruits1.length-1; i++){
    fruits2.push(fruits1[i].toUpperCase());
}

console.log(fruits2);
