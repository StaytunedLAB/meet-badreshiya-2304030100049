// Array destructuring
let coords = [10, 20];
let [x, y] = coords;
console.log(x, y);

// Object destructuring
let person = { name: "Meet", age: 23, country: "India" };
let { name, age, country } = person;

console.log(name);
console.log(age);
console.log(country);

// With default and rename
let { name: fullName, hobby = "Coding" } = person;
console.log(fullName, hobby);
