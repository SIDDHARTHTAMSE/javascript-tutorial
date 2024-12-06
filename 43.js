// nested destructuring 

const users = [
    {userId: 1, firstName: "Siddharth", gender: "Male"},
    {userId: 2, firstName: "Manju", gender: "Male"},
    {userId: 3, firstName: "Srushti", gender: "Female"}
]

const [user1, user2, user3] = users;
const [{firstName}, , {gender}] = users;
const [{firstName: userName}, , {gender: userGender}] = users;
console.log(user1);
console.log(firstName);
console.log(gender);
console.log(userName);



const users1 = [
    {userId: 1, firstName: "Siddharth", gender: "Male"},
    {userId: 2, firstName: "Manju", gender: "Male"},
    {userId: 3, firstName: "Srushti", gender: "Female"}
]

const [{firstName: userName1, userId}, , {gender: userGender1}] = users1;
console.log(userName1);
console.log(userId);