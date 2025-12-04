const id = Symbol("id");

let employee = {
  name: "Meet",
  [id]: 123
};

console.log(employee.name);
console.log(employee[id]);  // Accessing symbol property
console.log(Object.keys(employee)); // symbol not listed
