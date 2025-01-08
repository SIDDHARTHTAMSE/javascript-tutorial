// synchronous programming vs asychronous programming
console.log("script start");

const id = setTimeout(() => {
    console.log("inside setTimeout"); // if i does not run clearTimeout(id) then it will always print at the last because it is running from browser
}, 1000); // 1000 mili second means 1 second

for(let i=0; i < 100; i++){
    console.log("...");
}

console.log("setTimeout id is ", id);
console.log("clearing time out");
clearTimeout(id);
console.log("Script end");