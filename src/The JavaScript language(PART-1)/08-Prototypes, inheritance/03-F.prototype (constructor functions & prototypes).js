// Constructor function
function User(name) {
  this.name = name;
}

// Methods shared via prototype
User.prototype.sayHi = function () {
  console.log("Hi, I am " + this.name);
};

let user1 = new User("Meet");
let user2 = new User("Dev");

user1.sayHi(); // Hi, I am Meet
user2.sayHi(); // Hi, I am Dev

console.log(user1.__proto__ === User.prototype); // true
console.log(User.prototype.constructor === User); // true
