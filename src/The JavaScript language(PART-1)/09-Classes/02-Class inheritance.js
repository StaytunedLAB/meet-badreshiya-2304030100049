class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks 🐶`);
  }
}

const animal = new Animal("Creature");
animal.speak();

const dog = new Dog("Tommy");
dog.speak();
