const body = document.querySelector("body");
const container = document.querySelector(".container");
const button = document.querySelector(".btn");
let boxNum = 16;
button.addEventListener("click", () => {
  resetSquares();
  boxNum = parseInt(prompt("Please enter a number less than 100", "16"));
  genSquares(boxNum);
  container.style.gridTemplateColumns = `repeat(${boxNum}, 1fr)`;
});
let box = document.createElement("div");
box.className = "box";

function genSquares(boxNum) {
  for (let i = 0; i < boxNum * boxNum; i++) {
    let boxCopy = box.cloneNode(true);
    boxCopy.addEventListener("mouseover", () => {
      boxCopy.style.backgroundColor = "black";
    });
    container.appendChild(boxCopy);
  }
}
function resetSquares() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
