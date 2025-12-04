// Function is a value (object)
function greet(name) {
  console.log("Hello,", name);
}

console.log(greet.name);      // "greet"
console.log(greet.length);    // 1 (number of parameters)

// Named Function Expression (NFE)
let sayHi = function internalHi(name) {
  console.log("Hi,", name);
  // internalHi("Test"); // can call itself using its own name
};

sayHi("Meet");
// internalHi("X"); // ReferenceError: internalHi is not defined (outside)
