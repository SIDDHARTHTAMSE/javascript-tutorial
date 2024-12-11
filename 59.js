// reduce 

const numbers = [1,2,3,4,10];

const sum = numbers.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;
});
 
console.log(sum);


// add 100 value
const numbers1 = [1,2,3,4,10];

const sum1 = numbers.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;
}, 100);

console.log(sum1);



// accumulator   currentValue   return
// 1                2              3
// 3                3              6
// 6                4              10
// 10               10             20



const userCart = [
    {productId: 1, productName: "Mobile", price: 12000},
    {productId: 2, productName: "Laptop", price: 22000},
    {productId: 3, productName: "Tv", price: 15000},
]

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
}, 0)

console.log(totalAmount);



// totalPrice   currentProduct    return
// 0               {}              12000
// 12000           22000           34000
// 34000           15000           49000