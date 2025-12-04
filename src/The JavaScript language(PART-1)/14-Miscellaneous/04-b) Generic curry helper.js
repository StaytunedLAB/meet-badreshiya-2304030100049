
//Currying

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

function sum3(a, b, c) {
  return a + b + c;
}

const curriedSum3 = curry(sum3);

console.log(curriedSum3(1)(2)(3));   // 6
console.log(curriedSum3(1, 2)(3));   // 6
console.log(curriedSum3(1, 2, 3));   // 6
