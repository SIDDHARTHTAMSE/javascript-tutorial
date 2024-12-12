const userMthods = {
    about: function(){
        return `${this.firsName} is ${this.age} years old.`
    },
    is18: function(){
        return this.age >=18;
    }
}
function createUser(firsName, lastName, email, age, address){
    const user = {};
    user.firsName = firsName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMthods.about;
    user.is18 = userMthods.is18;
    return user;
}

const user1 = createUser("Siddharth", "Tamse", "sidtamse@gamil.com", 18, "Pantlbag,Mudgeri,Karwar");
const user2 = createUser("Srushti", "Patil", "sidtamse@gamil.com", 19, "Pantlbag,Mudgeri,Karwar");
console.log(user1.about());
console.log(user2.about());
console.log(user2.is18());
console.log(user2.is18());