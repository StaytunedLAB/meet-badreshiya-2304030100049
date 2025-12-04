// Good style
function greet(name) {
  if (!name) {
    return "No name provided";
  }

  return `Hello, ${name}!`;
}

console.log(greet("Meet"));
