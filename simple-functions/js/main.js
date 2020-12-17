//create a function that adds two numbers and alerts the sum
function addTwoNumbers(x, y) {
  alert(x + y);
}

// extended add function that takes a list of numbers and returns their sum
function add(...rest) {
  const sum = rest.reduce((acc, number) => {
    return (acc += number);
  }, 0);
  return sum;
}
//create a function that multiplys three numbers and console logs the product
function multiplyThreeNumbers(x, y, z) {
  const product = x * y * z;
  console.log(product);
}

//create a function that divides two numbers and returns the ???
function divideTwoNumbers(dividend, divisor) {
  return dividend / divisor;
}

// Test Cases, uncomment to test

//addTwoNumbers(5, 6);
//multiplyThreeNumbers(5, 6, 8);
//console.log(divideTwoNumbers(15, 5));
