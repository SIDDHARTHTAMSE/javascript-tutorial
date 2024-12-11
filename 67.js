// Sets (it is iterable)
// store data 
// sets also have its own methods
// No index-based access 
// Order is not guaranted 
// unique items only (no duplicates allowed)

const numbers = new Set([1,2,3,4]);
console.log(numbers);

const numbers1 = new Set("abc");
console.log(numbers1);

const numbers2 = new Set();
numbers2.add(1);
numbers2.add(2);
numbers2.add(3);
numbers2.add(4);
console.log(numbers2);

if(numbers2.has(1)){
    console.log("1 is present");
}else{
    console.log("1 is not present")
}

for(let number of numbers2){
    console.log(number);
}

const items = ['item1', 'item2', 'item3'];
const numbers3 = new Set();
numbers3.add(items);
console.log(numbers3);

const number4 = new Set();
number4.add(["item1", "item2"]);
number4.add(["item1", "item2"]);
console.log(number4);

const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);

// to find a length
let length = 0;
for(let element of uniqueElements){
    length++;
}

console.log(length);