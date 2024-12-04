// array destructuring 

const myArray = ["value1", "value2"];
let [myvar1, myvar2] = myArray;
console.log("Value od myvar1", myvar1);
console.log("Value od myvar2", myvar2);



// using ,
const myArray1 = ["value3", "value4", "value5", "value6"];
let [myvar3, , myvar4,] = myArray1;
console.log("Value of myvar3", myvar3);
console.log("Value of myvar5", myvar4);



// using slice

const myArray2 = ["value3", "value4", "value5", "value6"];
let [myvar5, myvar6] = myArray2;
let myNewArray = myArray2.slice(2);
console.log("Value of myvar1", myvar5);
console.log("Value of myvar2", myvar6);
console.log(myNewArray);


// using spread operator

const myArray3 = ["value3", "value4", "value5", "value6"];
let [myvar7, myvar8, ...myNewArray1] = myArray3;
console.log("Value od myvar1", myvar7);
console.log("Value od myvar2", myvar8);
console.log(myNewArray1);