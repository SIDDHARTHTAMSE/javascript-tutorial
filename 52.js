// rest parameters

function myFunc(a, b, c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
myFunc(3,4,5,6,7,8,9);

// if we want rest all arguement 
function myFunc1(a, b, ...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
myFunc1(3,4,5,6,7,8,9);



function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

const ans = addAll(4,8,2,7);
console.log(ans);