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

getTwoNumbersAndAdd(4, 5, addTwoNumbers);



function getTwoNumbersAndAdding(number3, number4, callback){
    if(typeof number3 === "number" && typeof number4 === "number"){
        callback(number3, number4)
    } else {
        console.log("Wrong data type");
    }
}

function addTwoNumbers(num1, num2){
    console.log(num1+num2);
}

getTwoNumbersAndAdding(4, 4, addTwoNumbers);




function getTwoNumbersAndAdding(number3, number4, onSuccess, onFailure){
    if(typeof number3 === "number" && typeof number4 === "number"){
        onSuccess(number3, number4)
    } else {
        onFailure();
    }
}

getTwoNumbersAndAdding("4", 4, (num1, num2) => {
    console.log(num1 + num2);
}, ()=> {
    console.log("Wrong data type");
    console.log("Please pass numbers only")
});
