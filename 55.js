// function returning function

function myFunc(){
    return 1;
}

const ans = myFunc();
console.log(ans);


// function under function
function myFunc1(){
    function hello(){
        console.log("hello world");
    }
    return hello;
}

const answer = myFunc1();
answer();