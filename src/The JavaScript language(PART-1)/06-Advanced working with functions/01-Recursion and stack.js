// Recursive factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;   // base case
  return n * factorial(n - 1);        // recursive call
}

console.log(factorial(5)); // 120

// Recursive countdown
function countdown(n) {
  console.log(n);
  if (n > 1) {
    countdown(n - 1); // stack grows until n = 1
  }
}

countdown(5);
