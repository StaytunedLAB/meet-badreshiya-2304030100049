let user = {
  name: "Meet",
  age: 23,
  city: "Ahmedabad"
};

console.log(Object.keys(user));    // ["name", "age", "city"]
console.log(Object.values(user));  // ["Meet", 23, "Ahmedabad"]
console.log(Object.entries(user)); // [["name","Meet"], ["age",23], ["city","Ahmedabad"]]

for (let [key, value] of Object.entries(user)) {
  console.log(key, "=>", value);
}
