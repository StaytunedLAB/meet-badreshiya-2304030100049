let user = {
  name: "Meet",
  age: 22
};

// Change property configuration
Object.defineProperty(user, "name", {
  writable: false,     // cannot change
  enumerable: true,    // will show in loops
  configurable: false  // cannot delete/modify again
});

console.log(user.name); // Meet

user.name = "Dev";      // fails silently (or error in strict mode)
console.log(user.name); // still "Meet"
