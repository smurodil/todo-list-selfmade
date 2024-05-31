import cssClassModifiers from "./css-class-modifiers.js";
import { elThemeToggler } from "./html-elements.js";
import loader from "./loader.js";

// Loader
window.onload = () => {
  const { timeout_1000 } = cssClassModifiers;
  const html = document.documentElement;
  html.dataset.theme = localStorage.getItem("theme") || "light";
  // renderTodosUI(todos);
  setTimeout(() => {
    loader();
  }, timeout_1000);
};

// Theme change
elThemeToggler.onclick = () => {
  const html = document.documentElement;
  const currentTheme = html.dataset.theme;
  html.dataset.theme = currentTheme === "dark" ? "light" : "dark";
  // Save to localStorage
  localStorage.setItem("theme", html.dataset.theme);
};

// // Get input data
// elNewTodoForm.onsubmit = (e) => {
//   e.preventDefault();
//   const inputValue = e.target[0].value;
//   console.log(e.target.id);
//   const isCompleted = false;
//   const id = window.crypto.randomUUID();
//   const todo = { inputValue, isCompleted, id };
//   addNewTodo(todo);

//   // Clean input
//   e.target.reset();
// };

const number = document.getElementById('numbersLeft')

function updateCount(){
  const checkboxes = document.querySelectorAll('.check-icon');
  let count = checkboxes.length;

  console.log();
  checkboxes.forEach(function(checkbox){
    if(checkbox.classList.contains("checked")){
      count--;
    }
  })

  number.innerHTML = count;
}


function decreaseElements(){
  if(number.innerHTML != 0){
    number.innerHTML = parseInt(number.innerHTML) - 1;
  }
}

function checkbox(){
  const checkboxes = document.querySelectorAll(".check-icon")

  checkboxes.forEach(function(checkbox){
    checkbox.addEventListener("click", function(){
      checkbox.classList.add("checked");
      const listItem = checkbox.parentNode.querySelector("li");
      listItem.classList.add("checked");
      updateCount();
      clearCompleted();
    });
  });
}

function cross(){
  const cross = document.querySelectorAll(".cross-icon");
  cross.forEach(function(remove){
    remove.addEventListener("click", function(){
      const div = remove.parentNode;
      div.parentNode.removeChild(div);
      decreaseElements();
    });
  });
}

function clearCompleted() {
  const checkboxes = document.querySelectorAll(".check-icon");
  const reset = document.getElementById("reset");
  reset.addEventListener("click", function () {
    checkboxes.forEach(function (checkbox) {
      if (checkbox.classList.contains("checked")) {
        const check = checkbox.parentNode;
        check.parentNode.removeChild(check);
      }
    });
  });
}

function activeItems() {
  const checkboxes = document.querySelectorAll(".check-icon");
  checkboxes.forEach(function (checkbox) {
    if (checkbox.classList.contains("checked")) {
      const check = checkbox.parentNode;
      check.style.display = " none";
    }
  });
}


function completedItems() {
  const checkboxes = document.querySelectorAll(".check-icon");
  checkboxes.forEach(function (checkbox) {
    if (!checkbox.classList.contains("checked")) {
      const check = checkbox.parentNode;
      check.style.display = "none";
    }
    if (checkbox.classList.contains("checked")) {
      const check = checkbox.parentNode;
      check.style.display = " flex";
    }
  });
}

function allItems(){
  const checkboxes = document.querySelectorAll(".check-icon");
  checkboxes.forEach(function (checkbox){
    const check = checkbox.parentNode;
    check.style.display = "flex";
  });
}

const addTodo = document.getElementById("add-todo");
const listCon = document.getElementById("list-con")

function addTask(){
  const div = document.createElement("div")
  const list = document.createElement("li")
  const imgCheckbox = document.createElement("img")
  const imgCross = document.createElement("img")



  imgCheckbox.setAttribute("src", "img/light-unchecked.svg")
  imgCheckbox.setAttribute("class", "check-icon")
  imgCross.setAttribute("src", "img/light-x.svg")
  imgCross.setAttribute("class", "cross-icon")

  const task = addTodo.value;
  list.textContent = task

  div.appendChild(imgCheckbox)
  div.appendChild(list);
  div.appendChild(imgCross)
  listCon.appendChild(div)

  updateCount();
  checkbox();
  cross();

  addTodo.value = "";

}

addTodo.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    if(addTodo.value !== ""){
      addTask();
    }
  }
})

const blue = "hsl(220, 98%, 61%)";
const grey = "hsl(236, 9%, 61%)";
all.style.color = blue;

function allToggle() {
  const all = document.getElementById("all");
  const active = document.getElementById("active");
  const completed = document.getElementById("completed");

  if (this.id === "all") {
    allItems();
    all.style.color = blue;
    active.style.color = grey;
    completed.style.color = grey;
  } else if (this.id === "active") {
    activeItems();
    all.style.color = grey;
    active.style.color = blue;
    completed.style.color = grey;
  } else if (this.id === "completed") {
    completedItems();
    all.style.color = grey;
    active.style.color = grey;
    completed.style.color = blue;
  }
}

// Attach the click event listener to the elements
all.addEventListener("click", allToggle);
active.addEventListener("click", allToggle);
completed.addEventListener("click", allToggle);