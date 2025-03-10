require("./xyz.js") // One module into another

const {x, calculateSum}  = require("./sum.js") //Desturcture on fly

// import {x, calculateSum} from "./sum.js"


var name = "Namaste NodeJS";

var a = 10;
var b = 30;

// z = 10; // Strict Mode


console.log(name);
console.log(a + b);



console.log(globalThis === global);


calculateSum(a,b)

console.log(x);






