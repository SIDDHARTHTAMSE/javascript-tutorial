// clone using Object.assign

// memory

const obj = {
    key1: "value1",
    key2: "value2"
}

const obj1 = obj;
const obj2 = {...obj}; // in this object extra added keys will not come because we are using spread operator
const obj3 = Object.assign({}, obj); // in this object extra added keys will not come because we are using Object.assign
obj.key3 = "value3"

console.log(obj);
console.log(obj1);
console.log(obj2);
console.log(obj3);