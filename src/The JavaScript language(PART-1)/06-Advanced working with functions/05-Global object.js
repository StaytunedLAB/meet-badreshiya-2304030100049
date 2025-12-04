// In browser:
window.myGlobal = "Hello from global";

console.log(window.myGlobal);
console.log(globalThis.myGlobal); // also works

// Implicit global (bad practice)
function setGlobal() {
  someValue = 123; // no let/var/const → becomes global (non-strict)
}
setGlobal();
console.log(globalThis.someValue);
