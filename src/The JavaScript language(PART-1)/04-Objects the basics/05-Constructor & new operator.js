function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log("Hi, I'm " + this.name);
  };
}

let person1 = new Person("Meet", 22);
let person2 = new Person("Dev", 20);

person1.sayHi();
person2.sayHi();
