const fs = require("node:fs");
const a = 100;

setImmediate(() => console.log("setimmediate"));

fs.readFile("./file.txt", "utf-8", () => {
  console.log("File reading CB");
});

setTimeout(() => {
  console.log("Timer expired");
}, 0);


function printA() {
    console.log("a =", a);
}

printA();

console.log("Last Line of the file");



/*
a = 100
Last Line of the file
TImer expired
setImmediate
file reading CB
*/