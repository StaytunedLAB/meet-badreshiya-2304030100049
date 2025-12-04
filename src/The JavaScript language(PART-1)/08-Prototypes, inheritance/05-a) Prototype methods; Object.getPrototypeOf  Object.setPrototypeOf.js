
//Prototype methods & objects without __proto__

let animal = { eats: true };
let cat = { meows: true };

// Set prototype in a safe way
Object.setPrototypeOf(cat, animal);

console.log(Object.getPrototypeOf(cat) === animal); // true
console.log(cat.eats);  // true (inherited)
console.log(cat.meows); // true
