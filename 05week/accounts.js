// create 2 classes:

// Account Class
// attributes / fields:
// - account number // this is passed in to the constructor
// - owner //this is passed in to the constructor
// - a list of transactions  // starts of empty
// methods:
// - balance(): loop through all the transactions,
//   and return the current balance
//-  addTransaction(payee, amount); // checks to see if the amount is valid (ie cannot debit more than the balance)

class Account {
  constructor(accountNumber, ownersName, transaction = []) {
    this.accountNumber = accountNumber;
    this.ownersName = ownersName;
    this.transaction = transaction;
  }

  balance() {
    // this method loops through the list of transactions
    this.transaction.reduce(function (total, currentValue) {
      return { amount: total.amount + currentValue.amount };
    });
  }

  addTransaction(payee, amount) {
    let newTrans = new Transaction(payee, amount);
    this.transaction.push(newTrans);
  }
}

// Transaction Class
// - amount (can be either positive or negative) // passed in to constructor
// - payee // passed in to constructor
// - date  // auto set in the constructor

class Transaction {
  constructor(payee, amount, date = new Date()) {
    this.payee = payee;
    this.amount = amount;
    this.date = date;
  }
}

// Create a SavingsAccount that extends Account
// - interestRate
// - accrueInterest(): this method, should get the balance,
//   and add a new transaction to the list of transactions
//   for the interest accrued on the account

class savingsAccount extends Account {
  constructor(accountNumber, ownersName, transaction = [], interestRate) {
    super(accountNumber, ownersName, transaction);
    this.interestRate = interestRate;
  }

  addInterestTransaction() {
    let interestEarned = this.balance() * this.interestRate;
    let newInterestTransaction = new Transaction(
      this.payee,
      interestEarned,
      new Date()
    );
    this.transaction.push(newInterestTransaction);
  }
}

// create a checking account
let myAccount = new Account("36055894367", "Eric Howard");

// Add deposits
myAccount.addTransaction("Door Dash", 500);
myAccount.addTransaction("Paycheck", 950);
// Add transactions
myAccount.addTransaction("HEB", -10.42);
myAccount.addTransaction("Best Buy", -67.35);
myAccount.addTransaction("Cheesecake Factory", -37.35);

console.log(myAccount.transaction);

// Get the balance of myAccount
console.log(myAccount.balance());

// create a savings account
let mySavingsAccount = new savingsAccount(
  "3605468974",
  "Eric Howard's Savings Account",
  (transaction = []),
  0.015
);

// Savings account deposits
mySavingsAccount.addTransaction("savings-deposit", 1500);
// Savings account withdraws
mySavingsAccount.addTransaction("Rent", -710);
mySavingsAccount.addTransaction("Car Payment", -521.62);

// Get the balance of savings account
mySavingsAccount.balance();

// Add an interest transaction to savings account
mySavingsAccount.addInterestTransaction();

console.log(mySavingsAccount.transaction);

console.log(mySavingsAccount.balance());
