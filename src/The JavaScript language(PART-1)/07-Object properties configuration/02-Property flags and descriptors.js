let product = {
  title: "Laptop"
};

// Get full descriptor info
let descriptor = Object.getOwnPropertyDescriptor(product, "title");
console.log(descriptor);

/*
Output example:
{
  value: 'Laptop',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// Change flags
Object.defineProperty(product, "title", {
  writable: false
});

product.title = "Tablet"; // ignored
console.log(product.title); // Laptop
