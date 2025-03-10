const fs = require("node:fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("timer expired"), 0);

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt", "utf-8", () => {
  setTimeout(() => console.log("2nd timer"));

  process.nextTick(() => console.log("2nd nextTick"));

  setImmediate(() => console.log("2nd setImmediate"));

  console.log("file Reading CB");
});

process.nextTick(() => console.log("nextTick"));

console.log("Last line of the file");

/*
Last line of the code
nextTick
promise
timer expired
setimmediate 

file Reading CB
2nd nextTick     //Poll Phase
2nd setImmediate
2nd timer

*/
