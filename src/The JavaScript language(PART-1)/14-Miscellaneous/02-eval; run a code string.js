const expr = "2 + 3 * 4";
const result = eval(expr);

console.log("Expression:", expr);
console.log("Result:", result); // 14

// Define variable dynamically (again, not recommended)
eval("var x = 42;");
console.log(x); // 42
