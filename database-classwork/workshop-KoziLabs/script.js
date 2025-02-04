// DOM Elements
const taskInput = document.getElementById('taskTitle');
const prioritySelect = document.getElementById('priority');
const storageSelect = document.getElementById('storageType');
const addButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const clearSessionBtn = document.getElementById('clearSession');
const clearLocalBtn = document.getElementById('clearLocal');
const showAllBtn = document.getElementById('showAll');
const showPendingBtn = document.getElementById('showPending');
const showCompletedBtn = document.getElementById('showCompleted');

// 
let localTasks = [];
let sessionTasks = [];
let currentFilter = 'all'

// functions
function validateTaskInput(title){
    if (!title){
        alert("Tusčia")
        return false
    }
    if (title.length > 100){
        alert("per ilgas")
        return false
    }
    return true
}

function addTask(){
    let titleValue = taskInput.value.trim();
    let storageValue = storageSelect.value;
    let priorityValue = prioritySelect.value;
    console.log(titleValue, priorityValue, storageValue)
    if (!validateTaskInput(titleValue)){
        console.log('Blogas pavadinimas')
        return;
    }
    let newTask = {
        id: Date.now(),
        title: titleValue,
        priority: priorityValue,
        completed: false,
        createdAt: new Date().toISOString()
    }

    console.log(newTask)

    try {
        if (storageSelect.value === 'local'){
            localTasks.push(newTask)
        } else {
            sessionTasks.push(newTask)
        }
    } catch {

    }
}

function createTaskElement(task, ){
    const li = document.createElement('li');
    li.className = `list-group-item ${task.completed? 'completed' : ''}`;
    const taskContent = document.createElement('div');
    taskContent.textContent = task.title;

    const priorityBadge = document.createElement('span');
    priorityBadge.className = `priority priority-${task.priority.toLowerCase()}`
    priorityBadge.textContent = task.priority;

    li.appendChild(taskContent)
    li.appendChild(priorityBadge)
    return li;
}

function saveTasks(){
    try {
        localStorage.setItem('tasks', JSON.stringify(localTasks))
        sessionStorage.setItem('tasks', JSON.stringify(sessionTasks))
    } catch (error){
        alert('error saving tasks to storage')
    };
};

function renderTasks(){
    taskList.innerHTML='';
    const machesFilter = (task)=>{
        return currentFilter === 'all' || 
            (currentFilter==='completed' && task.completed) ||
            (currentFilter==='pending' && !task.completed)
    };

    [...localTasks, ...sessionTasks]
        .sort((a, b) =>b.createAt.localeCompare(a.createdAt))
        .filter(machesFilter)
        .forEach(task=>{
            const storage = localTasks.includes(task)? 'local' : 'session';
            const taskElement = createTaskElement(task, storage);
            taskList.appendChild(taskElement)
        });

    [showAllBtn, showPendingBtn, showCompletedBtn].forEach(btn =>{
        btn.classList.remove('active');
    });
    document.querySelector(`button[id="show${currentFilter.charAt(0).toUpperCase + currentFilter.slice(1)}"]`)?.classList.add('active');
};


// Add your event listeners here
addButton.addEventListener('click', addTask)
