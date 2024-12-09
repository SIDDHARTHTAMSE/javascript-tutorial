// block scope vd function scope 
// let and const are block scope 
// var is function scope 


// let and const are block scope
// Sappose we try to call firstName outside the block then it will give error
{
    let firstName = "Siddharth";
    console.log(firstName);
}

{
    let firstName = "Manjunath";
    console.log(firstName);
}

// var is function scope 
// Sappose we try to call firstName outside the block then it will print
{
    var firstName = "Yogesh";
}
console.log(firstName);

{
    let firstName = "Srushti";
    console.log(firstName);
}


// using if condition

if(true){
    var firstName = "Sid";
    console.log(firstName);
}
console.log(firstName);


// it will give error we can't call variable outside the block using let and const but we can access using var
function myApp(){
    if(true){
        let firstName1 = "Manju";
        console.log(firstName1);
    }
    console.log(firstName1);
}

myApp();