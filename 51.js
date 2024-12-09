// default parameters 

// Type 1  in this default value b is 0, we can do this to a variable also
function addtwo(a, b){
    if(typeof b === "undefined"){
        b = 0;
    }
    return a + b;
}
const ans = addtwo(4, 5);
console.log(ans);

// Type 2 in this default value b is 0, we can do this to a variable also
function addTwo(a, b=0){
    return a + b;
}

const answer = addTwo(4, 8)
console.log(answer);