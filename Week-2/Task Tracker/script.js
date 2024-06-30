
const taskInput = document.querySelector("#text-field");
const taskList = document.querySelector("#task-list");

taskInput.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        const textContent = taskInput.value.trim();
        if (textContent !== "") {
            const li = document.createElement('li');
            li.classList.add("py-2", "border-bottom")
            const checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            const spanText = document.createElement('span');
            spanText.textContent = textContent;
            const button = document.createElement('button');
            button.className = 'btn';
            const icon = document.createElement('i');
            icon.className = 'bi bi-trash3';
            button.appendChild(icon);
            li.appendChild(checkBox);
            li.appendChild(spanText);
            li.appendChild(button);
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }
});


































