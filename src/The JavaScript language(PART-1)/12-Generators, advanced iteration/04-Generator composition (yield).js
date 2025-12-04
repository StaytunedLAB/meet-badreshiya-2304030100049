
//Generators

function* genA() {
  yield 1;
  yield 2;
}

function* genB() {
  yield* genA(); // delegate to genA
  yield 3;
}

for (let value of genB()) {
  console.log(value); // 1 2 3
}
