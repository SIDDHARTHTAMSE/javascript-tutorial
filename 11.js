// undefined

// let firstname; 
// console.log(typeof firstname); //output is undefined
// firstname = "Sid"; 
// console.log(typeof firstname, firstname);

// var firstname1; 
// console.log(typeof firstname); //output is undefined

// const firstname2; 
// console.log(typeof firstname); //output is error because something we have to store in const datatype


// null
// let myVariable = null;
// console.log(myVariable);

// myVariable = "Sid";
// console.log(myVariable, typeof myVariable);

// console.log(typeof null);   // This is the Bug in JavaScript


// BigInt

console.log(Number.MAX_SAFE_INTEGER);    // Output is: 9007199254740991 only this much of number we can store safely in javascript

let newNumber = BigInt(12);  
let samenewNumber = 123n;  // This also BigInt
console.log(samenewNumber);

console.log(newNumber + samenewNumber);