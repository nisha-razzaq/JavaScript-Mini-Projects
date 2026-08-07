const input = document.getElementById("taskInput");
const addbtn = document.getElementById("addTask");
const tasklist = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

function updateStats() {

    const total = tasklist.children.length;

    const completed =
        document.querySelectorAll(
            '#taskList input[type="checkbox"]:checked'
        ).length;

    const pending = total - completed;

    totalTasks.textContent = total;
    completedTasks.textContent = completed;
    pendingTasks.textContent = pending;
}

addbtn.addEventListener("click", () => {

    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskText = document.createElement("span");
    taskText.textContent = task;

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.classList.add("delete-btn");

    deletebtn.addEventListener("click", () => {
    li.remove();
    updateStats();
});
   checkbox.addEventListener("change", () => {

    if (checkbox.checked) {
        taskText.style.textDecoration = "line-through";
        taskText.style.color = "gray";
    } else {
        taskText.style.textDecoration = "none";
        taskText.style.color = "black";
    }

    updateStats();
});
    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deletebtn);

    tasklist.appendChild(li);
updateStats();

    input.value = "";
});