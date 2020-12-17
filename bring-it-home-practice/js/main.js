// *Variables*
// Create a variable and console log the value
const variable = "I'm in a variable";
console.log(variable);

// Create a variable, add 10 to it, and alert the value
let anotherVariable = 100;
//alert(anotherVariable + 10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNumbers(minuend, x, y, z) {
  alert(minuend - x - y - z);
}
//subtractFourNumbers(15, 5, 2, 1);

// Create a function that divides one number by another and returns the remainder
function getRemainder(dividend, divisor) {
  return dividend % divisor;
}
//console.log(getRemainder(209, 23));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function isSumGreaterThan50(x, y) {
  x + y > 50 && alert('Jumanji');
}
//isSumGreaterThan50(25, 60);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function isProductDivisibleBy3(x, y, z) {
  (x * y * z) % 3 === 0 && alert('ZEBRA');
}
//isProductDivisibleBy3(3, 2, 6);
