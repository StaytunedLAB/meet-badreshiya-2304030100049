
//Modules, introduction

console.log("This is a JavaScript module ✅");

// Top-level `this` is undefined in modules
console.log(this); // undefined

// Variables are module-scoped (not global)
const msg = "Hello from module";
console.log(msg);
