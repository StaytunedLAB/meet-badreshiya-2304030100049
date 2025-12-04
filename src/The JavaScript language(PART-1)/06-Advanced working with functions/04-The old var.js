// var is function-scoped (not block-scoped)
if (true) {
  var x = 10;
}
console.log(x); // 10 (still accessible)

// var hoisting
console.log(y); // undefined (but no error)
var y = 5;

// let/const would throw ReferenceError if used before declaration
