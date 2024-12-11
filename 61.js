// find method 

const myArray = ["Hello", "cat", "dog", "lion"];

const ans = myArray.find((string)=>{
    return string.length === 3;
});
console.log(ans);



const users = [
    {userId: 1, userName: "Siddharth"},
    {userId: 2, userName: "Manju"},
    {userId: 3, userName: "Nimesh"},
    {userId: 4, userName: "Manish"},
    {userId: 5, userName: "Yogesh"},
]

const answer = users.find((user)=>{
    return user.userId === 2;
});

console.log(answer);