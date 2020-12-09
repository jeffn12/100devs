const contestants = document.querySelectorAll(".contestant");

for (element of contestants) {
  element.addEventListener("click", checkForRose);
}

function checkForRose(click) {
  if (click.target.classList.contains("rose")) {
    document.querySelector("#nikki").classList.toggle("hidden");
  } else {
    alert("Wrong!");
  }
}
