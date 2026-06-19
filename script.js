function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value;

    if(task === ""){
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleComplete(this)">
            ${task}
        </span>
        <button onclick="deleteTask(this)">❌</button>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
    saveTasks();

    updateCount();
}

function deleteTask(btn){
    btn.parentElement.remove();
    saveTasks();
    updateCount();
}

function toggleComplete(task){
    task.classList.toggle("completed");
    saveTasks();
}

function updateCount(){
    let count = document.querySelectorAll("#taskList li").length;
    document.getElementById("taskCount").innerText =
        "Total Tasks: " + count;
}
window.onload = function(){
    let savedTasks = localStorage.getItem("tasks");

    if(savedTasks){
        document.getElementById("taskList").innerHTML = savedTasks;
    }

    updateCount();
}
function saveTasks(){
    localStorage.setItem(
        "tasks",
        document.getElementById("taskList").innerHTML
    );
}