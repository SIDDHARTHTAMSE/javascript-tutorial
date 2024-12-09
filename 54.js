// callback functions

function myFunc2(){
    console.log("inside my func 2");
}
function myFunc(callback){
    console.log("hello there I am func and I can ...");
    callback();
}

myFunc(myFunc2);


// with parameter
function myFunc4(name){
    console.log("inside my func 4");
    console.log(`your name is ${name}`);
}
function myFunc(callback){
    console.log("hello there I am func and I can ...");
    callback("Manjunath");
}

myFunc(myFunc4);
