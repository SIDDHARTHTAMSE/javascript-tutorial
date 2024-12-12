
function createUser(firsName, lastName, email, age, address){
    const user = {};
    user.firsName = firsName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firsName} is ${this.age} years old.`
    };
    user.is18 = function(){
        return this.age >=18;
    }
    return user;
}

const user1 = createUser("Siddharth", "Tamse", "sidtamse@gamil.com", 18, "Pantlbag,Mudgeri,Karwar");
console.log(user1);
const isAge = user1.is18();
console.log(isAge);
const about = user1.about();
console.log(about);