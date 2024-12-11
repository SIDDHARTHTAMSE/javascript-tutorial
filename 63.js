// some method

const numbers = [3,5,8,9];

const ans = numbers.some((number)=>number % 2 === 0);
console.log(ans);

const products = [
    {productId: 1, productName: "p1", price: 12000},
    {productId: 2, productName: "p2", price: 22000},
    {productId: 3, productName: "p3", price: 35000},
    {productId: 4, productName: "p4", price: 150000},
]

const answer = products.some((product)=>product.price > 100000);
console.log(answer);