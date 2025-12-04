// A mixin: reusable set of methods
const canWalk = {
  walk() {
    console.log(`${this.name} is walking 🚶`);
  }
};

const canEat = {
  eat() {
    console.log(`${this.name} is eating 🍽️`);
  }
};

class Person {
  constructor(name) {
    this.name = name;
  }
}

// Copy mixin methods into Person.prototype
Object.assign(Person.prototype, canWalk, canEat);

const p = new Person("Meet");
p.walk();
p.eat();
