// Simple logging decorator
function withLogging(fn) {
  return function (...args) {
    console.log("Calling with args:", args);
    let result = fn.apply(this, args); // forward call & context
    console.log("Result:", result);
    return result;
  };
}

function add(a, b) {
  return a + b;
}

let loggedAdd = withLogging(add);
loggedAdd(3, 7);

// call/apply example
function introduce(greeting) {
  console.log(`${greeting}, I'm ${this.name}`);
}

let user = { name: "Meet" };

introduce.call(user, "Hello");        // Hello, I'm Meet
introduce.apply(user, ["Hi there"]);  // Hi there, I'm Meet
