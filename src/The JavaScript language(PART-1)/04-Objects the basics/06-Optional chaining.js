let customer = {
  profile: {
    email: "test@example.com"
  }
};

console.log(customer.profile?.email); // Works
console.log(customer.address?.street); // Undefined (no error!)
