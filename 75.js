// arrow function

const user1 = {
    firstName: "Siddharth",
    age: 25,
    about: () => {
        console.log(this.firstName, this.age); // we cannot use this keyword in arrow function
    }
}

user1.about(user1);