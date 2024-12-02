// nested if else 
const input = require('readline');

const r1 = input.createInterface({
    input: process.stdin,
    output: process.stdout
});

let winningNumber = 19;
r1.question(`Guess a number: `, (userGuess) => {
    userGuess = parseInt(userGuess, 10);

    if(userGuess === winningNumber){
        console.log("Your guess is right!!!");
    }else{
        if(userGuess < winningNumber){
            console.log("too low!!");
        }else{
            console.log("too high");
        }
    }

    r1.close();
});