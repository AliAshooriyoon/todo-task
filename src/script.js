let drag1 = document.getElementById("dragFile1");
let drag2 = document.getElementById("dragFile2");
let dropBox = document.getElementById("drop-Box");
drag1.addEventListener("dragstart", draged);
drag2.addEventListener("dragstart", draged);
function draged() {
  console.log("drag!");
}
dropBox.addEventListener("dragover", function (event) {
  event.preventDefault();
  console.log(event);
});
