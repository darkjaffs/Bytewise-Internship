// Add Task On Enter
const taskInput = document.querySelector("#text-field");
const taskList = document.querySelector("#task-list");
let currentList = document.querySelectorAll("li");
const ul = document.querySelector("#task-list");

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const textContent = taskInput.value.trim();
    if (textContent !== "") {
      const li = document.createElement("li");
      li.classList.add("py-2", "border-bottom", "d-flex", "gap-2");
      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      const spanText = document.createElement("span");
      spanText.textContent = textContent;
      spanText.className = "align-self-center";
      const button = document.createElement("button");
      button.className = "btn ms-auto rm-btn";
      const icon = document.createElement("i");
      icon.className = "bi bi-trash3";
      button.appendChild(icon);
      li.appendChild(checkBox);
      li.appendChild(spanText);
      li.appendChild(button);
      taskList.appendChild(li);
      taskInput.value = "";
      currentList = document.querySelectorAll("li");
    }
  }

  const rmBtn = document.querySelectorAll(".rm-btn");
  rmBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
      element.parentElement.remove();
      currentList = document.querySelectorAll("li");
    });
  });
});

// Clear All
window.addEventListener("DOMContentLoaded", (event) => {
  const clearBtn = document.querySelector("#btn-clear");
  clearBtn.addEventListener("click", (e) => {
    const list = document.querySelectorAll("li");
    let listArr = Array.from(list);
    if (list.length !== 0) {
      listArr.forEach((element) => {
        element.remove();
      });
    }
    currentList = document.querySelectorAll("li");
  });
});

// Remove Element on Trash Press
window.addEventListener("DOMContentLoaded", (event) => {
  const rmBtn = document.querySelectorAll(".rm-btn");
  rmBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
      element.parentElement.remove();
      currentList = document.querySelectorAll("li");
    });
  });
});

// Completed Task List
let checkedList = [];
const cBtn = document.querySelector("#btn-completed");

cBtn.addEventListener("click", (e) => {
  currentList.forEach((element) => {
    input = element.firstElementChild;
    if (input.checked) {
      checkedList.push(element);
    }
  });

  ul.innerHTML = "";
  checkedList.forEach((element) => {
    ul.appendChild(element);
  });

  checkedList = [];
});

// Pending Task List
let uncheckedList = [];
const pBtn = document.querySelector("#btn-pending");

pBtn.addEventListener("click", (e) => {
  currentList.forEach((element) => {
    input = element.firstElementChild;
    if (input.checked === false) {
      uncheckedList.push(element);
    }
  });

  ul.innerHTML = "";
  uncheckedList.forEach((element) => {
    ul.appendChild(element);
  });

  uncheckedList = [];
});

//All Task List

const aBtn = document.querySelector("#btn-all");
aBtn.addEventListener('click', (e)=>{
    ul.innerHTML = "";
    currentList.forEach((element) => {
      ul.appendChild(element);
    });
});