try {
  console.log("Start of try block");

  // Code that may throw an error
  let result = 10 / 0;
  console.log(result);

  // Force an error
  throw new Error("Something went wrong!");

  console.log("This line will not run");
} catch (error) {
  console.log("Caught an error:");
  console.log(error.message);
} finally {
  console.log("Finally block always executes");
}

console.log("Code continues after try/catch");
