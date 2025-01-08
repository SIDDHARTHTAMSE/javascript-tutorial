// understand callback 

function myFunc(callback){
    console.log("Function is doing task 1");
    callback();
}

myFunc(() => {
    console.log("Function is doing task 2");
});



function getTwoNumbersAndAdd(number1, number2, callback) {
    console.log(number1, number2);
    callback(number1, number2);
}

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

getTwoNumbersAndAdd(4,5, addTwoNumbers);