// Arrays use Array.prototype under the hood
let arr = [1, 2, 3];

console.log(arr.__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true

// Extending native prototype (be careful in real projects!)
Array.prototype.first = function () {
  return this[0];
};

console.log(arr.first()); // 1

// String prototype
let str = "hello";
console.log(str.toUpperCase()); // "HELLO"
console.log(str.__proto__ === String.prototype); // true
