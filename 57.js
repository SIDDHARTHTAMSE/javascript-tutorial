// map method 
const numbers = [3, 4, 6, 1, 8];

const square = function(number){
    return number * number;
}

const sqaureNumber = numbers.map(square);
console.log(sqaureNumber);



const numbers1 = [3, 4, 6, 1, 8];

const sqaure = numbers1.map((number, index) =>{
    return `index: ${index}, ${number * number}`;
});
console.log(sqaure);


const users = [
    {firstName: "Siddharth", age: 24},
    {firstName: "Manju", age: 32},
    {firstName: "Yogesh", age: 25},
    {firstName: "Srushti", age: 22},
]

const userName = users.map((user) =>{
    return user.firstName;
});

console.log(userName);