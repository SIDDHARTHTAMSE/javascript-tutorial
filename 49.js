// lexical scope 

const myVar = "value1";

function myApp(){

    function myFunc(){
        const myVar = "value59";
        console.log("inside myFunc", myVar);
    }

    console.log(myVar);
    myFunc();
}

myApp();


// In this function if i trying to call variable but dont have variable inside my function then it will search on lexical scope

const myVar1 = "value1";

function myApp(){

    function myFunc(){
        // const myVar1 = "value60";
        console.log("inside myFunc", myVar1);
    }

    console.log(myVar1);
    myFunc();
}

myApp();
