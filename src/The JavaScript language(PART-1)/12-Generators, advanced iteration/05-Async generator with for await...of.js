
//Async iteration and async generators

// Async generator
async function* asyncCounter(limit) {
  for (let i = 1; i <= limit; i++) {
    await new Promise(resolve => setTimeout(resolve, 500)); // simulate delay
    yield i;
  }
}

(async () => {
  for await (let value of asyncCounter(3)) {
    console.log("Value:", value);
  }
  console.log("Done");
})();
