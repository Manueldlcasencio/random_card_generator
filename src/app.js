/* eslint-disable */
import "./style.css";

function card() {
  let palo = ["spade", "heart", "club", "diamond"];
  let ran = Math.floor(Math.random() * 4);
  let num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let ran2 = Math.floor(Math.random() * 12);
  document.body.innerHTML =
    '<div class="card ' + palo[ran] + '">' + num[ran2] + "</div>";
}

window.onload = function() {
  card();
  setInterval(card, 2000);
};
