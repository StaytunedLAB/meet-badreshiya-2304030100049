// setTimeout: run once after delay
setTimeout(() => {
  console.log("Runs after 1 second");
}, 1000);

// setInterval: run repeatedly
let count = 0;
let timerId = setInterval(() => {
  count++;
  console.log("Interval:", count);

  if (count === 5) {
    clearInterval(timerId);  // stop after 5 times
  }
}, 500);
