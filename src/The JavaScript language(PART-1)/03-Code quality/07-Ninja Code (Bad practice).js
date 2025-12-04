//Ninja style

a=5;b=6;c=a*b;console.log(c)

//Not meaningful variable names

function x(y,z){return y*z}
console.log(x(3,4))

//Good style instead

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

console.log(multiply(3, 4));
