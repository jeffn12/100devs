//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
const h1El = document.querySelector('h1');
const inputEl = document.querySelector('input');
const pEl = document.querySelector('p');

h1El.addEventListener('click', evaluate);
function evaluate() {
  let age = inputEl.value;
  let response = '';
  if (age < 16) {
    response += "you can't drive\n";
  }
  if (age < 18) {
    response +=
      "you can't hate from outside the club, cause you can't even get in\n";
  }
  if (age < 21) {
    response += "you can't drink\n";
  }
  if (age < 21) {
    response += "you can't rent cars affordably\n";
  }
  if (age < 21) {
    response += "you can't rent fancy cars affordably\n";
  } else {
    response += 'there is nothing left to look forward to :-(\n';
  }
  pEl.innerText = response;
}
