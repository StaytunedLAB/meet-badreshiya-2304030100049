let animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

// Create object with given prototype
let dog = Object.create(animal);
dog.barks = true;

console.log(dog.eats);   // true (inherited)
console.log(dog.barks);  // true (own)

dog.walk(); // "Animal walks"
