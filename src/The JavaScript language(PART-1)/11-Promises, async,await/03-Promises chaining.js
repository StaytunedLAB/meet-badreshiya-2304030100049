function step1(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Step 1:", value);
      resolve(value + 1);
    }, 500);
  });
}

function step2(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Step 2:", value);
      resolve(value * 2);
    }, 500);
  });
}

step1(1)
  .then(result1 => step2(result1))
  .then(result2 => {
    console.log("Final result:", result2);
  });
