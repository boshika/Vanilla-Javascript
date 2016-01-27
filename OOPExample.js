//constructor
function Checking(amount) {
  this.balance = amount;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.toString = toString;
}

function deposit(amount) {
  this.balance += amount;
}
function withdraw(amount) {
  if(amount <= this.balance) {
    this.balance += amount;
  } 
  if (amount > this.balance) {
    console.log("Not enough MONEY");
  }
  function toString() {
    return "balance: " + this.balance;
  }

  //Object creation
  var account = new Checking(1000);
  account.deposit(1000);
  account.withdraw(500);

  

}

