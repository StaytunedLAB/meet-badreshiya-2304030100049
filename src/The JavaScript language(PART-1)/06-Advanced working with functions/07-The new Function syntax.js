// Create function from string (rare, but possible)
let sum = new Function("a", "b", "return a + b;");

console.log(sum(3, 4)); // 7

// Useful for dynamic code generation (but avoid when possible)
let code = "return x * 2;";
let double = new Function("x", code);

console.log(double(5)); // 10
