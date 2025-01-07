// Getter and Setter

// class Person {
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
//     setName(firsName, lastName){
//         this.firstName = firsName;
//         this.lastName = lastName;
//     }
// }

// const person1 = new Person("Manjunath", "Bhavi", 34);
// console.log(person1.firstName);
// console.log(person1.lastName);
// person1.setName("Siddharth", "Tamse");
// console.log(person1.firstName);
// console.log(person1.lastName);







class person1 {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person = new person1("Siddharth", "Tamse", 34);
person.fullName = "Yegesh Mahekar";
console.log(person);
console.log(person.fullName);