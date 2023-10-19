// let TaskName = document.querySelector(".taskName");
// let TaskBox = document.querySelector(".taskBox");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let popUpPage = document.querySelector(".popUp");
let addToDoBtn = document.getElementById("addToDo");
let closePopUpBtn = document.getElementById("closePopUp");
let taskValue = document.getElementById("newTaskValue");
let newTaskBtn = document.getElementById("taskValueBtn");
addToDoBtn.addEventListener("click", newTask);
closePopUpBtn.addEventListener("click", closePopUp);
document.addEventListener("keydown", closePopUpESC);
newTaskBtn.addEventListener("click", addTask);
function newTask() {
  console.log("added Task!");
  popUpPage.classList.remove("hidden");
}
function closePopUp() {
  popUpPage.classList.add("hidden");
  taskValue.value = "";
}
function closePopUpESC(event) {
  if (event.key === "Escape") {
    popUpPage.classList.add("hidden");
    taskValue.value = "";
  }
}
function addTask() {
  let newToDo = document.createElement("div");
  let newToDoValue = document.createElement("p");
  newToDoValue.className = "askName text-2xl font-bold m-5";
  newToDoValue.innerHTML = taskValue.value;
  newToDo.className =
    "taskBox w-[75%] h-16 bg-sky-500 mx-auto mt-5 flex items-center justify-center rounded-xl";
  newToDo.append(newToDoValue);
  box1.append(newToDo);
  popUpPage.classList.add("hidden");
  taskValue.value = "";
}
