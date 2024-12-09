// hoisting 

hello();

function hello(){
    console.log("hello world");
}

//in function expression it will give error we cant call function before execute

hello();

let hello = function(){
    console.log("hello world");
}

hello2();

const hello2 = () => {
    console.log("hello world");
}

// in arrow function it will give error we cant call function before execution

hello3();

let hello3 = () => {
    console.log("hello world");
}

hello1();

const hello1 = () => {
    console.log("hello world");
}