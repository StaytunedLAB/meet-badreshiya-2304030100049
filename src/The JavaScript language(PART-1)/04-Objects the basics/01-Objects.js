// Creating an object
let person = {
  name: "Meet",
  age: 22,
  isStudent: true
};

// Accessing properties
console.log(person.name);
console.log(person.age);

// Adding a property
person.city = "Ahmedabad";

// Removing a property
delete person.isStudent;

console.log(person);
