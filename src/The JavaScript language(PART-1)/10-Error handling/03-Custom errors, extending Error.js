class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError"; // custom name
  }
}

function registerUser(username) {
  if (!username) {
    throw new ValidationError("Username is required!");
  }
  console.log("User registered:", username);
}

try {
  registerUser(""); // calling with empty value to throw error
} catch (error) {
  console.log(error.name);     // ValidationError
  console.log(error.message);  // Username is required!
  console.log(error.stack);    // call stack info
}
