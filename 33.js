// for of loop in array 

const fruits = ["apple", "mango", "banana", "Orange"];

for(let fruit of fruits){  // for of loop will not give index values it will print directly 
    console.log(fruit);
}

// using toUpperCase and push

const fruits1 = ["apple", "mango", "banana", "Orange"];
const fruits2 = [];
for(let fruit of fruits1){
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);