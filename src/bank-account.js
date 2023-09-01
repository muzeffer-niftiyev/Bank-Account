export default function BankAccount(ownerName, initialBalance) {
    this.ownerName = ownerName;
    this.balance = initialBalance;
  }

  BankAccount.prototype.deposit = function (amount) {
    if (typeof amount !== 'number' || amount < 0) {
      throw new Error('Enter valid value!');
    };
    this.balance += amount;
  };

  BankAccount.prototype.withdraw = function (amount) {
    if (typeof amount !== "number" || amount < 0) {
      throw new Error("Enter valid value!");
    }

    if(amount > this.balance ) {
      throw new Error("Withdraw can't be more than balance!");
    }

    this.balance -= amount;
  };

  BankAccount.prototype.getBalance = function () {
    return this.balance;
  };
