function myFunc(){
    console.log("hello wordld");
}
myFunc.call();


const user1 = {
    firstName: "Srushti",
    age: 22,
    about: function(){
        console.log(this.firstName, this.age);
    }
}
const user2 = {
    firstName: "Manju",
    age: 32
}

user1.about();
user1.about.call(user2);

// using parameters
const user3 = {
    firstName: "Srushti",
    age: 22,
    about: function(hobby, favSong){
        console.log(this.firstName, this.age, hobby, favSong);
    }
}
const user4 = {
    firstName: "Manju",
    age: 32
}

user3.about("Meditation", "Shiv Song");
user3.about.call(user4,"Cricket", "Sare jahan se acha");



// we can write this type also
function about(hobby, favSong){
    console.log(this.firstName, this.age, hobby, favSong);
}

const user5 = {
    firstName: "Nimesh",
    age: 22,
}
const user6 = {
    firstName: "Manju",
    age: 32
}

about.call(user5, "Volleyball", "vande mataram");
about.call(user6, "Volleyball", "Jana Gana Mana");

// apply
about.apply(user5, ["Basket Ball", "Tum hi ho"]);
const func = about.bind(user6, "Cricket", "Mannat");
func();