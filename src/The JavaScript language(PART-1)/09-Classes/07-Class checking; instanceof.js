class User {}
class Admin extends User {}

const u = new User();
const a = new Admin();

console.log(u instanceof User);   // true
console.log(u instanceof Admin);  // false

console.log(a instanceof Admin);  // true
console.log(a instanceof User);   // true
console.log(a instanceof Object); // true
