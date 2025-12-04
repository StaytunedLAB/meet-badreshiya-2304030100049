// Unicode example with emoji (surrogate pair)
const s = "A😊B";

console.log("String:", s);
console.log("Length:", s.length);       // 4 (UTF-16 code units)
console.log("Chars with for...of:");
for (const ch of s) {
  console.log(ch);                      // A, 😊, B
}

// Correct "character" count using spread
console.log("Characters:", [...s].length); // 3

// Unicode escape
const smile = "\u{1F600}"; // 😀
console.log(smile);
