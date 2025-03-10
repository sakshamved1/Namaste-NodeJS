const fs = require("node:fs");
const a = 100;

setImmediate(() => console.log("setimmediate"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf-8", () => {
  console.log("File reading CB");
});

setTimeout(() => {
  console.log("Timer expired");
}, 0);

process.nextTick(() => {
  console.log("Process.nextTick");
});

function printA() {
  console.log("a =", a);
}

printA();

console.log("Last Line of the file");



/*
a= 100
Last line of the file
Process.nextTick
Promise
Timer expired
setImmediate
file reading CB
*/
