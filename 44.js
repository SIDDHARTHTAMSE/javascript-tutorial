// function

function singHappyBirthday(){
    console.log("Happy birthday to you....")
}

singHappyBirthday();


// with return type

function twoPlusFour(){
    return 2+4;
}

const returnedValue = twoPlusFour();
console.log(returnedValue);



// with parameters

function sumTwoNumbers(number1, number2){
    return number1 + number2;
}
console.log(sumTwoNumbers(4, 5));

// idEven
// input: 1 Number
// output: true , false

function isEven(number){
    if(number % 2 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(2));



// fucntion
// input: String
// output: firstCharacter

function firstCharacter(anyString){
    return anyString[0];
}

console.log(firstCharacter("zbc"))


// function
// input: array, target (number)
// output: index of  target if target present in array

function findArray(array, target){
    for(let i=0; i<array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}

const myArray = [1,3,8,90];
const ans = findArray(myArray, 8);
console.log(ans);