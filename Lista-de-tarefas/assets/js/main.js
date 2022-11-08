const taskInput = document.querySelector('.task-input');
const taskBtn = document.querySelector('.task-btn');
const tasks = document.querySelector('.tasks');

function createLi() {
  const li = document.createElement('li');
  return li;
}

function createTask(inputText) {
  const li = createLi();
  li.innerText = inputText;
  tasks.appendChild(li);
  clearInput();
  createDel(li);
  saveTask();
}

taskBtn.addEventListener('click', function (e) {
  if (!taskInput.value) return;
  createTask(taskInput.value);
});

taskInput.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (!taskInput.value) return;
    createTask(taskInput.value);
  }
});

function clearInput() {
  taskInput.value = '';
  taskInput.focus();
}

function createDel(li) {
  li.innerText += ' ';
  const delBtn = document.createElement('button');
  delBtn.innerText = 'Apagar';
  delBtn.setAttribute('class', 'delete');
  li.appendChild(delBtn);
}

document.addEventListener('click', function (e) {
  const el = e.target;
  if (el.classList.contains('delete')) {
    el.parentElement.remove();
    saveTask();
  }
});

function saveTask() {
  const liTasks = tasks.querySelectorAll('li');
  const tasksList = [];

  for (let task of liTasks) {
    let taskText = task.innerText;
    taskText = taskText.replace('Apagar', '').trim();
    tasksList.push(taskText);
  }

  const tasksJson = JSON.stringify(tasksList);
  localStorage.setItem('tasks', tasksJson);
}

function getTasks() {
  const tasks = localStorage.getItem('tasks');
  const tasksList = JSON.parse(tasks);

  for (let task of tasksList) {
    createTask(task);
  }
}

getTasks();
