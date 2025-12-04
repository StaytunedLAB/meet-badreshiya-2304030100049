// Parent object
let animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

// Child object that inherits from animal
let rabbit = {
  jumps: true,
  __proto__: animal   // prototype link
};

console.log(rabbit.eats);  // true (from animal)
console.log(rabbit.jumps); // true (own property)

rabbit.walk(); // "Animal walks" (inherited method)
