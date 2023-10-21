// let TaskName = document.querySelector(".taskName");
// let TaskBox = document.querySelector(".taskBox");
const box1 = document.querySelector(".TaskBox1");
const box2 = document.querySelector(".TaskBox2");
const box3 = document.querySelector(".TaskBox3");
const box4 = document.querySelector(".TaskBox4");
const popUpPage = document.querySelector(".popUp");
const addToDoBtn = document.getElementById("addToDo");
const closePopUpBtn = document.getElementById("closePopUp");
let taskValue = document.getElementById("newTaskValue");
let newTaskBtn = document.getElementById("taskValueBtn");
let newToDo;
let newToDoValue;
let newToDoNumber = 0;
const boxHeaders = document.querySelectorAll(".boxHeader");
let allBoxHeaders = {
  boxHeader1: boxHeaders[0],
  boxHeader2: boxHeaders[1],
  boxHeader3: boxHeaders[2],
  boxHeader4: boxHeaders[3],
};
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
      "taskBox w-[75%] h-16  mx-auto mt-5 flex items-center justify-center rounded-xl bg-zinc-700";
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
        "taskBox w-[75%] h-16 mx-auto mt-5 flex items-center justify-center rounded-xl bg-zinc-700";
      newToDo.append(newToDoValue);
      box1.append(newToDo);
      popUpPage.classList.add("hidden");
      taskValue.value = "";
      newToDo.addEventListener("dblclick", removeTask);
      // newToDoValue.addEventListener("dblclick", removeTaskValue);
      newToDo.addEventListener("dragstart", dragStarted);
    }
  }
}
function removeTask(event) {
  if (event.target.id === `newToDo${newToDoNumber}`) {
    console.log("true");
    console.log(event.target);
    event.target.remove();
  } else {
    event.target.parentElement.remove();
  }
}
// function removeTaskValue(event) {
//   console.log(`remove Parent ${event.target.parentElement}`);
//   event.target.parentElement.p.remove();
// }
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
  console.log(targetElement.parentElement.parentElement.children[0]);
  let targetStyle =
    targetElement.parentElement.parentElement.children[0].classList[1];
  targetElement.classList.remove(targetElement.classList[9]);
  targetElement.classList.add(targetStyle);
}
function dragStarted(event) {
  event.dataTransfer.setData("elementID", event.target.id);

  console.log(event.target.parentElement);
}
