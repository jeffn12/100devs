document.querySelector("#purple").onclick = partyPurple;
document.querySelector("#green").onclick = partyGreen;
document.querySelector("#blue").onclick = partyBlue;

let dancePartyState = false;
let dancePartyInterval;

function partyPurple() {
  document.querySelector("body").style.backgroundColor = "rgba(241,63,247,1)";
  document.querySelector("body").style.color = "white";
}

function partyGreen() {
  document.querySelector("body").style.backgroundColor = "rgba(0,253,81,1)";
  document.querySelector("body").style.color = "white";
}

function partyBlue() {
  document.querySelector("body").style.backgroundColor = "rgba(0,254,255)";
  document.querySelector("body").style.color = "white";
}

// Dance party...
document.querySelector("#dance").onclick = () => {
  if (!dancePartyState) {
    dancePartyState = true;
    document.querySelector("#stop-dancing").style.visibility = "visible";
    let interval = setInterval(function () {
      if (
        document.querySelector("body").style.backgroundColor ===
        "rgb(241, 63, 247)"
      ) {
        document.querySelector("body").style.backgroundColor =
          "rgba(0, 253, 81)";
      } else if (
        document.querySelector("body").style.backgroundColor ===
        "rgb(0, 253, 81)"
      ) {
        document.querySelector("body").style.backgroundColor =
          "rgb(0, 254, 255)";
      } else if (
        document.querySelector("body").style.backgroundColor === "" ||
        document.querySelector("body").style.backgroundColor ===
          "rgb(0, 254, 255)" ||
        document.querySelector("body").style.backgroundColor === "white"
      ) {
        document.querySelector("body").style.backgroundColor =
          "rgb(241, 63, 247)";
      }
    }, 500);
    document.querySelector("#stop-dancing").onclick = () => {
      clearInterval(interval);
      dancePartyState = false;
      document.querySelector("body").style.backgroundColor = "white";
      document.querySelector("body").style.color = "black";
      document.querySelector("#stop-dancing").style.visibility = "hidden";
    };
  }
};
