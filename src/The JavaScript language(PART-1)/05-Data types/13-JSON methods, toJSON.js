let user = {
  name: "Meet",
  age: 23,
  city: "Ahmedabad",
  toJSON() {
    // Customize what is serialized
    return {
      name: this.name,
      age: this.age
    };
  }
};

// Object → JSON string
let json = JSON.stringify(user);
console.log(json);

// JSON string → Object
let parsed = JSON.parse('{"language":"JavaScript","level":"Beginner"}');
console.log(parsed.language);
console.log(parsed.level);
