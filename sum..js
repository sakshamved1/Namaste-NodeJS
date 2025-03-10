// Module Protect Their variables and functions from leaking

console.log("Sum Module executed");

var x = "The value of X is 10";

function calculateSum(a, b) {
  const sum = a + b;

  console.log(sum);
}


console.log(module.exports); // Empty  object

module.exports = { x, calculateSum };

// module.exports = calculateSum;
// module.exports = {
//   x: x,
//   calculateSum: calculateSum,
// };
