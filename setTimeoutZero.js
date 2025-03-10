

console.log("Hello world");


// This callback will only be Pushed to callstack in v8 Once the call stack is empty
setTimeout(()=> {
    console.log("SetTImeout runs After 0 MS !!!!!!!!!");
    
},0) // True issues with SetTimeout

setTimeout(()=> {
    console.log("SetTImeout runs After 3 Seconds");
    
},3000)


var x = 10;
var y = 10;

function multiply(a, b) {
  return a * b;
}


var  c = multiply(x,y)

console.log("Result of multiplication is " , c);


