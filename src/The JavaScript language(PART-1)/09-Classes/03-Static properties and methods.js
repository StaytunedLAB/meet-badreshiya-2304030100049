class MathUtil {
  static PI = 3.14159; // static property

  static add(a, b) {   // static method
    return a + b;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.add(3, 7));

// Note: static members are called on the class, not instances
const m = new MathUtil();
// m.add(1, 2); // ❌ Error
