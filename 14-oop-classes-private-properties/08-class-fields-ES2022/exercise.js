// 01-11-24 7:49PM

class Wallet {
  #balance = 0;
  #transactions = [];

  deposit(amount) {
    this.#balance += amount;
    this.#processDeposit(amount);
  }

  #processDeposit(amount) {
    console.log(`Depositing ${amount}`);
    this.#transactions.push({
      type: "deposit",
      amount: amount,
    });
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("No enough funds");
      return;
    }
    this.#processWithdraw(amount);
    this.#balance -= amount;
  }

  #processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`);
    this.#transactions.push({
      type: "withdraw",
      amount: amount,
    });
  }

  get balance() {
    return this.#balance;
  }

  get transactions() {
    return this.#transactions;
  }
}

const wallet = new Wallet();
wallet.deposit(100);
wallet.withdraw(50);
console.log("current balance : ", wallet.balance);
console.log("transactions: ", wallet.transactions);
console.log(wallet.#balance); // error
