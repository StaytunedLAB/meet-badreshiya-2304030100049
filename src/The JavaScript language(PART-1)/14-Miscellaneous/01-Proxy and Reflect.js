const user = {
  name: "Meet",
  age: 22
};

const userProxy = new Proxy(user, {
  get(target, prop, receiver) {
    console.log(`GET ${String(prop)}`);
    return Reflect.get(target, prop, receiver); // safe default behavior
  },
  set(target, prop, value, receiver) {
    console.log(`SET ${String(prop)} = ${value}`);
    return Reflect.set(target, prop, value, receiver); // safe default behavior
  }
});

console.log(userProxy.name);   // triggers get trap
userProxy.age = 23;            // triggers set trap
console.log(userProxy.age);
