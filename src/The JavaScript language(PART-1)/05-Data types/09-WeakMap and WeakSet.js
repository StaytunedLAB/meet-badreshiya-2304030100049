let wm = new WeakMap();
let ws = new WeakSet();

let obj1 = { id: 1 };
let obj2 = { id: 2 };

wm.set(obj1, "User 1");
ws.add(obj2);

console.log(wm.get(obj1));
console.log(ws.has(obj2));

// If obj1 or obj2 lose all other references, they can be garbage-collected.
// (You can't see this directly in code, it's managed by JS engine.)
