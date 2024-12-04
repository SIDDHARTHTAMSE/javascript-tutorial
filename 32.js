// while loop in array 

const fruits = ["apple", "mango"];
let i = 0;

while(i<fruits.length){
    console.log(fruits[i]);
    i++;
}

// toUpperCase

const fruits1 = ["apple", "mango"];
const fruits2 = [];
let j = 0;

while(j<fruits1.length){
    fruits2.push(fruits1[j].toUpperCase());
    j++;
}
console.log(fruits2);