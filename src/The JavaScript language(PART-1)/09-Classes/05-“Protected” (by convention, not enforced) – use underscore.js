
//Private and “protected” properties and methods

class Person {
  constructor(name) {
    this._name = name; // treat as protected
  }

  greet() {
    console.log(`Hello, I'm ${this._name}`);
  }
}

class Employee extends Person {
  showName() {
    console.log(`Employee name: ${this._name}`); // allowed by convention
  }
}

const e = new Employee("Dev");
e.greet();
e.showName();
