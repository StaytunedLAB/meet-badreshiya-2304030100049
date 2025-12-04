// Map: key → value
let map = new Map();
map.set("name", "Meet");
map.set("age", 23);

console.log(map.get("name"));
console.log(map.has("age"));
console.log(map.size);

for (let [key, value] of map) {
  console.log(key, ":", value);
}

// Set: unique values
let set = new Set([1, 2, 2, 3, 3, 3]);

set.add(4);
console.log(set.has(2));
console.log(set.size);

for (let value of set) {
  console.log(value);
}
