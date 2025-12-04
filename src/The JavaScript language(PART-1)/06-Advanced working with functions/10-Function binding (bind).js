let user = {
  name: "Meet",
  sayHi() {
    console.log("Hi, I am " + this.name);
  }
};

let say = user.sayHi;
// say(); // this would be undefined or window

let boundSay = user.sayHi.bind(user);
boundSay(); // Hi, I am Meet

// Partial application with bind
function multiply(a, b) {
  return a * b;
}

let double = multiply.bind(null, 2);
console.log(double(5)); // 10
