// Create an object with no prototype

//Prototype methods & objects without __proto__

let dict = Object.create(null);

dict.apple = "A fruit";
dict.car = "A vehicle";

console.log(dict.apple); // "A fruit"
console.log(dict.toString); // undefined (no Object.prototype)

// Useful for “pure” key/value maps
for (let key in dict) {
  console.log(key, ":", dict[key]);
}
