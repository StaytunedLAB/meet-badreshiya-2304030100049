function mayFail(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Something went wrong"));
      } else {
        resolve("All good ✅");
      }
    }, 500);
  });
}

mayFail(true)
  .then(msg => {
    console.log("Success:", msg);
  })
  .catch(err => {
    console.log("Caught error:", err.message);
  })
  .finally(() => {
    console.log("Done (success or error).");
  });
