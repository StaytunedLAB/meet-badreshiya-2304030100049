
//Generators

function* numberGenerator() {
  console.log("Start");
  yield 1;
  yield 2;
  yield 3;
  console.log("End");
}

const gen = numberGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
