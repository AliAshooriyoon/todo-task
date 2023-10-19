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
let newToDo;
let newToDoValue;
let newToDoNumber = 0;
addToDoBtn.addEventListener("click", newTask);
closePopUpBtn.addEventListener("click", closePopUp);
document.addEventListener("keydown", closePopUpESC);
newTaskBtn.addEventListener("click", addTask);
taskValue.addEventListener("keydown", addTaskEnter);
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
  if (taskValue.value) {
    newToDo = document.createElement("div");
    newToDo.id = `newToDo${++newToDoNumber}`;
    newToDo.draggable = true;
    newToDoValue = document.createElement("p");
    newToDoValue.className = "askName text-2xl font-bold m-5";
    newToDoValue.innerHTML = taskValue.value;
    newToDo.className =
      "taskBox w-[75%] h-16 bg-sky-500 mx-auto mt-5 flex items-center justify-center rounded-xl";
    newToDo.append(newToDoValue);
    box1.append(newToDo);
    popUpPage.classList.add("hidden");
    taskValue.value = "";
    newToDo.addEventListener("dblclick", removeTask);
    newToDo.addEventListener("dragstart", dragStarted);
  }
}

function addTaskEnter(event) {
  if (taskValue.value) {
    if (event.key === "Enter") {
      newToDo = document.createElement("div");
      newToDo.id = `newToDo${++newToDoNumber}`;
      newToDo.draggable = true;
      newToDoValue = document.createElement("p");
      newToDoValue.className = "askName text-2xl font-bold m-5";
      newToDoValue.innerHTML = taskValue.value;
      newToDo.className =
        "taskBox w-[75%] h-16 bg-sky-500 mx-auto mt-5 flex items-center justify-center rounded-xl";
      newToDo.append(newToDoValue);
      box1.append(newToDo);
      popUpPage.classList.add("hidden");
      taskValue.value = "";
      newToDo.addEventListener("dblclick", removeTask);
      newToDo.addEventListener("dragstart", dragStarted);
    }
  }
}
function removeTask(event) {
  console.log(event.target);
  event.target.remove();
}

box1.addEventListener("dragover", offDragOver);
box2.addEventListener("dragover", offDragOver);
box3.addEventListener("dragover", offDragOver);
box4.addEventListener("dragover", offDragOver);
box1.addEventListener("drop", dropToDo);
box2.addEventListener("drop", dropToDo);
box3.addEventListener("drop", dropToDo);
box4.addEventListener("drop", dropToDo);
function offDragOver(event) {
  event.preventDefault();
}
function dropToDo(event) {
  let targetId = event.dataTransfer.getData("elementID");
  let targetElement = document.getElementById(targetId);
  event.target.append(targetElement);
}
function dragStarted(event) {
  event.dataTransfer.setData("elementID", event.target.id);
}
