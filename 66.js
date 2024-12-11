// iterables
// string and array are iterable but object is not iterable
// iterable means we can apply for of loop

const firstName = "Siddharth";
for(let char of firstName){
    console.log(char);
}

const items = ['item1', 'item2', 'item3'];
for(let item of items){
    console.log(item);
}

// array like object 
// Which has length property
// and that we can access their index 
// example :- string 

const firstName1 = "Siddharth";
console.log(firstName1.length);
console.log(firstName1[4]);