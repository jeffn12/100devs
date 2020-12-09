document.querySelector("#finalRose").addEventListener("click", hide);

function hide(e) {
  e.target.innerText += " goes to Sharleen!";
  document.querySelector("#nikki").style.display = "none";
  document.querySelector("#claire").style.display = "none";
}
