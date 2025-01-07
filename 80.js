const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = Object.create(obj1);
obj2.key3 = "value3";

console.log(obj2.key3);
console.log(obj2.key2);
console.log(obj2.__proto__);




const userMethods1 = {
    about: function(){
        return `${this.firsName} is ${this.age} years old.`
    },
    is18: function(){
        return this.age >=18;
    }
}
function createUser(firsName, lastName, email, age, address){
    const user1 = Object.create(userMethods1);
    user1.firsName = firsName;
    user1.lastName = lastName;
    user1.email = email;
    user1.age = age;
    user1.address = address;
    return user1;
}

const user3 = createUser("Manju", "Bhavi", "sidtamse@gamil.com", 18, "Pantlbag,Mudgeri,Karwar");
const user4 = createUser("Nimesh", "Srivastava", "sidtamse@gamil.com", 19, "Pantlbag,Mudgeri,Karwar");
console.log(user3.about());
console.log(user3);
