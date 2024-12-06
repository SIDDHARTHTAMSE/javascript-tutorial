// spread operator

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

const newArray = [...array1, ...array2, 89, 69];
const newArray1 = [..."12345"];    // sappose we did not put values in sring it will come error;
console.log(newArray);
console.log(newArray1);

// spread operator in objects

const obj1 = {
    key1: "value1",
    key2: "value2"
};
const obj2 = {
    key1: "valueUnique",
    key3: "value3",
    key4: "value4"
};

const newObject = {...obj2, ...obj1, key69: "value69"};
const newObject1 = {..."abcd"};
const newObject2 = {...["item1", "item2"]};
console.log(newObject);
console.log(newObject1);
console.log(newObject2);
