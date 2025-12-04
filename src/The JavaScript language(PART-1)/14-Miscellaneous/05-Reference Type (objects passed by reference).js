let user1 = { name: "Meet" };
let user2 = user1; // copy reference, not object

user2.name = "Dev";

console.log(user1.name); // "Dev" (same object)
console.log(user2.name); // "Dev"

function rename(obj) {
  obj.name = "Patel";
}

rename(user1);
console.log(user1.name); // "Patel"
