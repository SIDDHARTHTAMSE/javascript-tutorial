// splice method
// start, delete, insert

// delete item
const myArray = ['item1', 'item2', 'item3'];
myArray.splice(1, 2);  // item2 and item3 will be deleted, 1 means it will start from index number 1
console.log(myArray);

// insert item
const myArray1 = ['item1', 'item2', 'item3'];
myArray1.splice(1, 0, 'inserted item');  // inserted item will inserted in index 1
console.log(myArray1);

const myArray2 = ['item1', 'item2', 'item3'];
myArray2.splice(1, 2, 'inserted item1', 'inserted item2');
console.log(myArray2);