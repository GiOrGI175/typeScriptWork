function calculateRectangleArea(rectangle: {
  width: number;
  height: number;
}): number {
  return rectangle.width * rectangle.height;
}

function calculateRectanglePerimeter(rectangle: {
  width: number;
  height: number;
}): number {
  return 2 * (rectangle.width + rectangle.height);
}

function calculateCircleArea(circle: { radius: number }): number {
  return Math.PI * Math.pow(circle.radius, 2);
}

function calculateCirclePerimeter(circle: { radius: number }): number {
  return 2 * Math.PI * circle.radius;
}

function addNumbers(a: number, b: number): number {
  return a + b;
}

function multiplyNumbers(a: number, b: number): number {
  return a * b;
}

function capitalizeString(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

function findMax(numbers: []): number {
  return Math.max(...numbers);
}

function isPalindrome(str: string): boolean {
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}

function calculateFactorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}

//!

class RectangleProperties {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }

  addNumbers(a: number, b: number): number {
    return a + b;
  }

  multiplyNumbers(a: number, b: number): number {
    return a * b;
  }

  capitalizeString(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

const rectangle = new RectangleProperties(5, 10);
console.log('Area:', rectangle.area());
console.log('Perimeter:', rectangle.perimeter());

class Circle {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
  circumference(): number {
    return 2 * Math.PI * this.radius;
  }

  filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter((num) => num % 2 === 0);
  }

  findMax(numbers: []): number {
    return Math.max(...numbers);
  }

  isPalindrome(str: string): boolean {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  }

  calculateFactorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * calculateFactorial(n - 1);
    }
  }
}

const circle = new Circle(5);
console.log('Area:', circle.area());
console.log('Circumference:', circle.circumference());

//!

class BankAccount {
  private accountNumber: string;
  private balance: number;
  private transactionHistory: string[];

  constructor(accountNumber: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.transactionHistory = [];
    this.recordTransaction(`Initial deposit: $${initialBalance}`);
  }

  getAccountInfo(): string {
    return `Account Number: ${this.accountNumber}, Balance: $${this.balance}`;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      console.log('Deposit amount must be greater than zero.');
      return;
    }
    this.balance += amount;
    this.recordTransaction(`Deposited: $${amount}`);
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      console.log('Withdrawal amount must be greater than zero.');
      return;
    }
    if (this.balance < amount) {
      console.log('Insufficient balance.');
      return;
    }
    this.balance -= amount;
    this.recordTransaction(`Withdrew: $${amount}`);
  }

  transferFunds(amount: number, toAccount: BankAccount): void {
    if (amount <= 0) {
      console.log('Transfer amount must be greater than zero.');
      return;
    }
    if (this.balance < amount) {
      console.log('Insufficient balance.');
      return;
    }
    this.withdraw(amount);
    toAccount.deposit(amount);
    this.recordTransaction(
      `Transferred: $${amount} to Account ${toAccount.getAccountInfo()}`
    );
  }

  getTransactionHistory(): string[] {
    return this.transactionHistory;
  }

  private recordTransaction(transaction: string): void {
    this.transactionHistory.push(transaction);
  }
}
