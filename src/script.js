let drag1 = document.getElementById("dragFile1");
let drag2 = document.getElementById("dragFile2");
let drag3 = document.getElementById("dragFile3");
let dropBox = document.getElementById("drop-Box");
let dragElement;
drag1.addEventListener("dragstart", drag);
drag2.addEventListener("dragstart", drag);
drag3.addEventListener("dragstart", drag);
function drag(event) {
  console.log("drag!");
  event.dataTransfer.setData("elementID", event.target.id);
  console.log(event.dataTransfer.getData("elementID"));
}
dropBox.addEventListener("dragover", function (event) {
  event.preventDefault();
  // console.log("dragOver");
});
dropBox.addEventListener("drop", function (event) {
  console.log("drop!");
  dragElement = document.getElementById(
    event.dataTransfer.getData("elementID"),
  );
  event.target.append(dragElement);
});
