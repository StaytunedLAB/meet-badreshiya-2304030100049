
//Generators

function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

for (let value of range(1, 5)) {
  console.log(value); // 1 2 3 4 5
}
