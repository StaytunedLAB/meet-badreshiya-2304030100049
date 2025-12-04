
//WeakRef and FinalizationRegistry

// WeakRef example
let obj = { name: "Temp object" };
let weakRef = new WeakRef(obj);

console.log("Alive:", weakRef.deref()?.name); // "Temp object"

// If we drop strong reference, GC *may* collect it sometime later
obj = null;
// Later (maybe) weakRef.deref() will return undefined
