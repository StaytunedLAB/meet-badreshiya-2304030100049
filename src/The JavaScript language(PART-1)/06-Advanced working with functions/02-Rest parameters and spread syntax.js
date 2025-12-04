// Rest: collect multiple arguments into an array
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// Spread: expand array into arguments
let arr = [3, 5, 1];
console.log(Math.max(...arr)); // 5

// Combine arrays with spread
let a = [1, 2];
let b = [3, 4];
let combined = [...a, ...b, 5];
console.log(combined);
