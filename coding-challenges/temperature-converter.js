// create temperature conversion functions (celcius to fahrenheit, and fahrenheit to celcius)

function celciusToFahrenheit(temp) {
  return (temp * 9) / 5 + 32;
}

function fahrenheitToCelcius(temp) {
  return (temp - 32) * (5 / 9);
}

console.log(celciusToFahrenheit(100));
console.log(fahrenheitToCelcius(212));
