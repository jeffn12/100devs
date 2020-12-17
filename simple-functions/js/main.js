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

//create a function that divides two numbers and returns the ???

// Test Cases, uncomment to test

//addTwoNumbers(5, 6);
