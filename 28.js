// primitive vs reference data types 

// primitive
let num1 = 6;
let num2 = num1;
console.log("value is num1 is", num1);
console.log("Value is num2 is", num2);
num1++;
console.log("After incrementing num1");
console.log("value is num1 is", num1);
console.log("Value is num2 is", num2);

// reference data types 
// array 

let array1 = ["item1", "item2"];
let array2 = array1;
console.log("value is num1 is", array1);
console.log("Value is num2 is", array2);
array1.push("item3");
console.log("After pushing element to array 1");
console.log("value is num1 is", array1);
console.log("Value is num2 is", array2);
