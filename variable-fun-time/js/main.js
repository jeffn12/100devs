//--- Easy
//create a variable and assign it a number
let variable = 42;
//minus 10 from that number
variable -= 10;
//print that number to the console
console.log(variable);
//--- Medium
//create a variable that holds a value from the input
let inputElVal = document.querySelector('input').value;
//add 25 to that number
inputElVal += 25;
//alert that number
alert(inputElVal);
//--- Hard
//create a variable that holds the h1
const h1El = document.querySelector('h1');
//add an event listener to that element that console logs the sum of the two previous variables
h1El.addEventListener('click', logSum);
function logSum() {
  console.log(variable + parseInt(document.querySelector('input').value));
}
