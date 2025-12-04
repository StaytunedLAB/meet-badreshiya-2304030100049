let userBalance = {
  money: 1000,

  // toString conversion example
  toString() {
    return `Balance: ${this.money}`;
  },

  // valueOf conversion example
  valueOf() {
    return this.money;
  }
};

console.log(String(userBalance)); // "Balance: 1000"
console.log(userBalance + 500);   // 1500 (uses valueOf)
