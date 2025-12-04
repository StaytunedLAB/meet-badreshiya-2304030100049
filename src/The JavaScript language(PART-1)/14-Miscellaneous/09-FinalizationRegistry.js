
//WeakRef and FinalizationRegistry

// FinalizationRegistry example
const registry = new FinalizationRegistry((heldValue) => {
  console.log("Object was garbage collected:", heldValue);
});

let user = { name: "Meet" };

registry.register(user, "User Meet");

// Drop the strong reference
user = null;

// At some point in future, GC may collect it
// and the registry callback may log the message.
// (Not deterministic, just conceptual demo)
