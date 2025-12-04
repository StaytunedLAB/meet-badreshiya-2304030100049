// Objects are stored by reference
let user = { name: "Meet" };

let copy = user; // Copying reference, not object

copy.name = "Patel";

console.log(user.name); // Output: "Patel" (both refer to same object)

// Shallow copy
let original = { language: "JavaScript" };
let clone = { ...original }; // spread operator

clone.language = "TypeScript";

console.log(original.language); // JavaScript
console.log(clone.language);    // TypeScript
