// objects inside array
// very useful in real world applications

const users = [
    {userId: 1, userName: "Siddharth", gender: "Male"},
    {userId: 2, userName: "Manju", gender: "Male"},
    {userId: 3, userName: "Srushti", gender: "Female"}
]
console.log(users);

// using for of loop

const users1 = [
    {userId: 1, userName: "Siddharth", gender: "Male"},
    {userId: 2, userName: "Manju", gender: "Male"},
    {userId: 3, userName: "Srushti", gender: "Female"}
]
for(let user of users1){
    console.log(user);
    console.log(user.userId);
    console.log(user.userName);
    console.log(user.gender);
}
