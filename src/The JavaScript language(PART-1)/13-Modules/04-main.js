
//Export and Import
//Example with named exports and default export

// Import default + named
import subtract, { PI, add, multiply } from "./03-math.js";

console.log("PI =", PI);
console.log("2 + 3 =", add(2, 3));
console.log("4 * 5 =", multiply(4, 5));
console.log("10 - 7 =", subtract(10, 7));
