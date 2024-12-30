"use strict";
function calculateRectangleArea(rectangle) {
    return rectangle.width * rectangle.height;
}
function calculateRectanglePerimeter(rectangle) {
    return 2 * (rectangle.width + rectangle.height);
}
function calculateCircleArea(circle) {
    return Math.PI * Math.pow(circle.radius, 2);
}
function calculateCirclePerimeter(circle) {
    return 2 * Math.PI * circle.radius;
}
function addNumbers(a, b) {
    return a + b;
}
function multiplyNumbers(a, b) {
    return a * b;
}
function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function filterEvenNumbers(numbers) {
    return numbers.filter((num) => num % 2 === 0);
}
function findMax(numbers) {
    return Math.max(...numbers);
}
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}
function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * calculateFactorial(n - 1);
    }
}
//!
class RectangleProperties {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
    addNumbers(a, b) {
        return a + b;
    }
    multiplyNumbers(a, b) {
        return a * b;
    }
    capitalizeString(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
const rectangle = new RectangleProperties(5, 10);
console.log('Area:', rectangle.area());
console.log('Perimeter:', rectangle.perimeter());
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
    circumference() {
        return 2 * Math.PI * this.radius;
    }
    filterEvenNumbers(numbers) {
        return numbers.filter((num) => num % 2 === 0);
    }
    findMax(numbers) {
        return Math.max(...numbers);
    }
    isPalindrome(str) {
        const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
        const reversedStr = cleanStr.split('').reverse().join('');
        return cleanStr === reversedStr;
    }
    calculateFactorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        else {
            return n * calculateFactorial(n - 1);
        }
    }
}
const circle = new Circle(5);
console.log('Area:', circle.area());
console.log('Circumference:', circle.circumference());
//!
class BankAccount {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.transactionHistory = [];
        this.recordTransaction(`Initial deposit: $${initialBalance}`);
    }
    getAccountInfo() {
        return `Account Number: ${this.accountNumber}, Balance: $${this.balance}`;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log('Deposit amount must be greater than zero.');
            return;
        }
        this.balance += amount;
        this.recordTransaction(`Deposited: $${amount}`);
    }
    withdraw(amount) {
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
    transferFunds(amount, toAccount) {
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
        this.recordTransaction(`Transferred: $${amount} to Account ${toAccount.getAccountInfo()}`);
    }
    getTransactionHistory() {
        return this.transactionHistory;
    }
    recordTransaction(transaction) {
        this.transactionHistory.push(transaction);
    }
}
