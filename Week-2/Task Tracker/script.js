// Add Task On Enter
const taskInput = document.querySelector("#text-field");
const taskList = document.querySelector("#task-list");

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
    }
  }

  const rmBtn = document.querySelectorAll(".rm-btn");
  rmBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
      element.parentElement.remove();
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
  });
});

// Remove Element on Trash Press
window.addEventListener("DOMContentLoaded", (event) => {
  const rmBtn = document.querySelectorAll(".rm-btn");
  rmBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
      element.parentElement.remove();
    });
  });
});

//TODO Completed Task List

//TODO Pending Task List
