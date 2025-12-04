class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // method
  sayHi() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const user1 = new User("Meet", 22);
user1.sayHi();
