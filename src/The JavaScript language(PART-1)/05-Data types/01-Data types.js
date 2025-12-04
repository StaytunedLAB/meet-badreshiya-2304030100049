let age = 23;                      // number
let name = "Meet";                 // string
let isStudent = true;              // boolean
let nothing = null;                // null
let notDefined;                    // undefined
let user = { name: "Meet" };       // object
let uniqueId = Symbol("id");       // symbol
let big = 12345678901234567890n;   // bigint

console.log(typeof age);
console.log(typeof name);
console.log(typeof isStudent);
console.log(typeof nothing);   // "object" (quirk)
console.log(typeof notDefined);
console.log(typeof user);
console.log(typeof uniqueId);
console.log(typeof big);
