// This code goes in a separate file: script.js

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

console.log("Using an external JS file from a code editor ✅");

let x = 10;
let y = 4;

console.log("x + y =", add(x, y));
console.log("x - y =", subtract(x, y));
