
//Export and Import
//Example with named exports and default export

// Named exports
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// Default export (only one per module)
export default function subtract(a, b) {
  return a - b;
}
