const synth = window.speechSynthesis;
document.querySelector("#yell").addEventListener("click", run);

function run() {
  const fName = document.querySelector("#firstName").value;
  const fMidName = document.querySelector("#firstMiddle").value;
  const lMidName = document.querySelector("#lastMiddle").value;
  const lName = document.querySelector("#lastName").value;

  //Add what you should be doing - conditionals go here
  if (fName !== "" || fMidName !== "" || lMidName !== "" || lName !== "") {
    const yellText = `Yaa done messed up, ${fName} ${fMidName} ${lMidName} ${lName}`;
    document.querySelector("#placeToYell").innerText = yellText;
    synth.speak(new SpeechSynthesisUtterance(yellText));
  } else {
    document.querySelector("#placeToYell").innerText =
      "GENERIC YELLING!  (enter your name for a personal scolding)";
    synth.speak(new SpeechSynthesisUtterance("I'm yelling at you!"));
  }
}
