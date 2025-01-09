// Promise

const bucket = ['coffee', 'chips', 'vegetables','salt', 'rice'];

const friedRicePromise = new Promise((resolve,reject)=> {
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("Fried Rice");
    } else {
        reject("Couldn't do it");
    }
})




friedRicePromise.then(
    (myFriedRice)=>{
        console.log("Lets eat", myFriedRice)
    }
    ,
    (error)=>{
        console.log(error)
    }
)