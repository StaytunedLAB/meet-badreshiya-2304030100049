const p1 = new Promise(resolve => setTimeout(() => resolve("P1 done"), 500));
const p2 = new Promise(resolve => setTimeout(() => resolve("P2 done"), 1000));
const p3 = new Promise((_, reject) => setTimeout(() => reject("P3 failed"), 800));

// Promise.all – waits for all to fulfill (or rejects on first error)
Promise.all([p1, p2])
  .then(results => console.log("all:", results))
  .catch(err => console.log("all error:", err));

// Promise.race – first settled (resolved or rejected)
Promise.race([p1, p3])
  .then(result => console.log("race:", result))
  .catch(err => console.log("race error:", err));

// Promise.allSettled – waits for all, never rejects
Promise.allSettled([p1, p3])
  .then(results => console.log("allSettled:", results));

// Promise.any – first fulfilled (ignores rejections, rejects if all reject)
Promise.any([p3, p1])
  .then(result => console.log("any:", result))
  .catch(err => console.log("any error:", err));
