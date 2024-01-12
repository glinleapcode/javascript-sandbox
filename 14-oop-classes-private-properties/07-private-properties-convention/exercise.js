//01-11-24 7:31PM

class Wallet {
  constructor() {
    this._balance = 0;
    this._transactions = [];
  }

  deposit(amount) {
    this._processDeposit(amount);
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log("No enough funds");
      return;
    }
    this._processWithdraw(amount);
    this._balance -= amount;
  }

  _processDeposit(amount) {
    console.log(`Depositing ${amount}`);
    this._transactions.push({
      type: "deposit",
      amount: amount,
    });
  }

  _processWithdraw(amount) {
    console.log(`Depositing ${amount}`);
    this._transactions.push({
      type: "withdraw",
      amount: amount,
    });
  }

  get balance() {
    return this._balance;
  }

  get transactions() {
    return this._transactions;
  }
}

const wallet = new Wallet();
wallet.deposit(100);
wallet.withdraw(10);
console.log(wallet.balance); // calling the getter
console.log(wallet.transactions); // calling the getter
