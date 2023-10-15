const input = document.getElementById('FormInput');
const button = document.getElementById('FormButton');
const tasksBox = document.getElementById('TasksBox');
const tasksCompletedBox = document.getElementById('TasksCompletedBox');

const tasks = document.querySelectorAll('.tasks__item');
const tasksUncompleted = []
const tasksCompleted = [];

tasks.forEach(task => {
    if (task.parentElement.id === 'TasksBox') {
        tasksUncompleted.push(task)
    } else {
        tasksCompleted.push(task)
    }
});

button.addEventListener('click', addTask);
window.addEventListener('keydown', enter);

function enter(e) {
    if (document.activeElement === input) {
        if ( e.key === 'Enter') {
            e.preventDefault()
            addTask();
            return
        }
    }
}

function addTask() {
    if (input.value.length === 0) {
        console.log('escribe algo');
        return
    }
    const id = tasks.length
    const newTask = document.createElement('div');
    newTask.classList = 'tasks__item';
    newTask.innerHTML =  `
        <input class="tasks__item__checkbox" type="checkbox" id="Task${id}">
        <label class="tasks__item__label" for="Task${id}">
        </label>
        <span class="tasks__item__text">
            ${input.value}
        </span>
    `;

    tasksUncompleted.push(newTask);
    tasksBox.appendChild(newTask);
    input.value = ''
}
