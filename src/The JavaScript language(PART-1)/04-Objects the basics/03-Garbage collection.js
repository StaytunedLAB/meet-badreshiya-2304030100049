// After losing all references to an object, it is auto removed from memory
let data = { value: 100 };

data = null; // old object becomes unreachable and will be garbage collected
console.log(data); // null
