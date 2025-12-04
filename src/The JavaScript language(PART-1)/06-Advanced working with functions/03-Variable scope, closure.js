function makeCounter() {
  let count = 0;  // local variable, captured by inner function

  return function () {
    count++;
    console.log("Count:", count);
  };
}

let counter1 = makeCounter();
counter1(); // Count: 1
counter1(); // Count: 2

let counter2 = makeCounter();
counter2(); // Count: 1 (separate closure)
