// how to clone array 

// how to concatenate two arrays

// slice

let array1 = ["item1", "item2"];
let array2 = array1.slice(0);
array1.push("item3");

console.log(array1===array2);
console.log(array1);
console.log(array2);


let array7 = ["item1", "item2"];
let array8 = array7.slice(0).concat(["item7", "item8"]);
array7.push("item3");

console.log(array7===array8);
console.log(array7);
console.log(array8);



// concatenate

let array3 = ["item1", "item2"];
let array4 = [].concat(array3);
array3.push("item3");

console.log(array3===array4);
console.log(array3);
console.log(array4);


let array9 = ["item1", "item2"];
let array10 = [].concat(array9,["item9", "item10"]);
array9.push("item3");

console.log(array9===array10);
console.log(array9);
console.log(array10);


// spread operator

let array5 = ["item1", "item2"];
let array6 = [...array5];
array5.push("item3");

console.log(array5===array6);
console.log(array5);
console.log(array6);




let array11 = ["item1", "item2"];
let array12 = [...array11, "item11", "item12"];
array11.push("item3");

console.log(array11===array12);
console.log(array11);
console.log(array12);
