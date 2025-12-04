
//Generators

function* askUser() {
  const name = yield "What is your name?";
  console.log("User name is:", name);

  const age = yield "What is your age?";
  console.log("User age is:", age);
}

const gen2 = askUser();

console.log(gen2.next().value);      // "What is your name?"
console.log(gen2.next("Meet").value); // "What is your age?"
console.log(gen2.next(22));           // finishes generator
