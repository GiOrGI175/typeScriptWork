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

class
