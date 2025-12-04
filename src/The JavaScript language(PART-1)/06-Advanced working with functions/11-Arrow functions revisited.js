// Arrow vs normal function with this
let user = {
  name: "Meet",
  regular() {
    console.log("regular this.name:", this.name);
  },
  arrow: () => {
    console.log("arrow this.name:", this.name); // from outer (usually window/undefined)
  }
};

user.regular(); // "Meet"
user.arrow();   // likely undefined (or window.name)

// Arrow as callback keeps outer this
let person = {
  name: "Dev",
  hobbies: ["Coding", "Music"],
  showHobbies() {
    this.hobbies.forEach(hobby => {
      console.log(this.name + " likes " + hobby);
    });
  }
};

person.showHobbies();
