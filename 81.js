// In function there is prototype
function hello(){
    console.log("hello world");
}

if(hello.prototype){
    console.log("prototype is present");
} else{
    console.log("prototype is not present");
}


// In object there is no prototype
const hello1 = {
    firstName: "Siddharth",
    age: 25
}

if(hello1.prototype){
    console.log("prototype is present");
} else{
    console.log("prototype is not present");
}


// In Array there is no prototype
const hello2 = [1,2,3,4];

if(hello2.prototype){
    console.log("prototype is present");
} else{
    console.log("prototype is not present");
}