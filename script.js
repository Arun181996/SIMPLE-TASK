let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput").value;
  if (taskInput.trim() !== "") {
    tasks.push(taskInput);
    document.getElementById("taskInput").value = "";
    renderTasks();
  }
}

function removeLastTask() {
  tasks.pop();
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerText = `${index + 1}. ${task}`;
    taskList.appendChild(li);
  });
}
