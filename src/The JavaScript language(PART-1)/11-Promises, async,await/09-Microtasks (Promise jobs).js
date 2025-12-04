console.log("Start");

setTimeout(() => {
  console.log("setTimeout callback");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise then 1");
  })
  .then(() => {
    console.log("Promise then 2");
  });

console.log("End");

/*
Order:
Start
End
Promise then 1
Promise then 2
setTimeout callback
*/
