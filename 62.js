// every method

const numbers = [2,4,6,8,10];

const ans = numbers.every((number)=>number%2===0);
console.log(ans);

const products = [
    {productId: 1, productName: "p1", price: 12000},
    {productId: 2, productName: "p2", price: 22000},
    {productId: 3, productName: "p3", price: 35000},
]

const answer = products.every((cartItem)=> cartItem.price < 30000);
console.log(answer);