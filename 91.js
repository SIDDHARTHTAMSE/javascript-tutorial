// static methods and properties 

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return 'this is person class';
    }
    static desc = "static property";
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    setName(firsName, lastName){
        this.firstName = firsName;
        this.lastName = lastName;
    }

    eat(){
        return `${this.name} is eating`;
    }
     
    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

const person1 = new Person("Siddharth", "Tamse", 25);
const info = Person.classInfo();
console.log(Person.desc);
console.log(info);