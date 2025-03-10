const crypto = require("node:crypto");

console.log("Hello world");


// Pbkdf - Password based key derivative function


//synchronous function- Will Block the MAIN THREAD - DON'T USE IT 
console.log("=================");

crypto.pbkdf2Sync("password", "salt", 500000, 10, "sha512");
console.log("first key generated");

setTimeout(()=> {
    console.log("SetTImeout runs After 0 MS !!!!!!!!!");
    
},0) // This is only be called once main Thread is empty


// asynchronous Code
crypto.pbkdf2("password", "salt", 500000, 10, "sha512", (err, key) => {
  console.log("second Key generated");
});




var x = 10;
var y = 10;

function multiply(a, b) {
  return a * b;
}

var c = multiply(x, y);

console.log("Result of multiplication is ", c);
