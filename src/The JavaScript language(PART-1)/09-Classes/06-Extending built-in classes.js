// Custom array with extra method
class CustomArray extends Array {
  first() {
    return this[0];
  }

  last() {
    return this[this.length - 1];
  }
}

const nums = new CustomArray(10, 20, 30, 40);

console.log(nums.first()); // 10
console.log(nums.last());  // 40
console.log(nums instanceof CustomArray); // true
console.log(nums instanceof Array);       // true
