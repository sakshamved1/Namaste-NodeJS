const fs = require("fs");
const https = require("https");

console.log("hello world");

var x = 873;
var y = 8376;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched data successfully");
});

setTimeout(() => {
  console.log("SetTimeout Called After 10 Sec ");
}, 10000);

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("file data ", data);
});

function multiply(a, b) {
  return a * b;
}

var c = multiply(x, y);

console.log("Result of multiplication is ", c);
