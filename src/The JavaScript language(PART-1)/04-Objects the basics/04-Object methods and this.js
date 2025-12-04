let user = {
  name: "Meet",
  greet() {
    console.log("Hello, " + this.name);
  }
};

user.greet();  // Hello, Meet
