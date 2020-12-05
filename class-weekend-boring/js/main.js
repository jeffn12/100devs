document.querySelector("#check").addEventListener("click", check);

function check() {
  const boringDays = [
    "monday",
    "mon",
    "m",
    "wednesday",
    "wed",
    "w",
    "friday",
    "fri",
    "f"
  ];
  const classDays = [
    "tuesday",
    "tue",
    "tues",
    "t",
    "thursday",
    "thu",
    "thur",
    "thurs",
    "th",
    "r"
  ];
  const weekendDays = ["saturday", "sat", "sunday", "sun"];

  const day = document.querySelector("#day").value;
  const display = document.querySelector("#placeToSee");
  //Conditionals go here
  if (boringDays.includes(day.toLowerCase())) {
    display.innerText = "BORING!";
  } else if (classDays.includes(day.toLowerCase())) {
    display.innerText = "CLASS!";
  } else if (weekendDays.includes(day.toLowerCase())) {
    display.innerText = "WEEKEND!";
  } else {
    display.innerText = "That doesn't seem like a valid day.  Try again.";
  }
}
