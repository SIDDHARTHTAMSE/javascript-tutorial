// same method in subclass

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
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




class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }

    eat(){
        return `Modified Eat: ${this.name} is eating`; // it will check first in subclass
    }

    run(){
        return `${this.name} is running at ${this.speed} kmph`
    }
}

const animal1 = new Dog("Tommy", 12, 45);
console.log(animal1);
console.log(animal1.eat()); 