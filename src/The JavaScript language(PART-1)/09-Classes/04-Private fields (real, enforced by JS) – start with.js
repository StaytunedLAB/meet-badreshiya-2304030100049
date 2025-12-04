
//Private and “protected” properties and methods

class BankAccount {
  #balance = 0; // private field

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("Meet");
account.deposit(1000);
console.log(account.getBalance()); // 1000
// console.log(account.#balance);  // ❌ SyntaxError: private field
