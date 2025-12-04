const big1 = 9007199254740991n;        // Max safe integer + BigInt
const big2 = 10n;

const sum = big1 + big2;
const product = big1 * big2;

console.log(sum);
console.log(product);

// ❌ Cannot mix BigInt and Number directly:
// console.log(big1 + 1); // TypeError

// Convert if needed:
console.log(big1 + BigInt(1)); // ok
