let user = {
  firstName: "Meet",
  lastName: "Patel",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    let parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(user.fullName); // Meet Patel  (getter)

user.fullName = "Dev Shah"; // setter
console.log(user.firstName); // Dev
console.log(user.lastName);  // Shah
