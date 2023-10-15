// variabales
const input = document.getElementById('FormInput');
const button = document.getElementById('FormButton');
const tasksBox = document.getElementById('TasksBox');
const tasksCompletedBox = document.getElementById('TasksCompletedBox');


/// <-- Añadir tareas inicia
button.addEventListener('click', addTask);
window.addEventListener('keydown', enter);

function enter(e) {
    // Validamos si nuestro input este activo
    if (document.activeElement === input) {
        // Validamos que la tecla sea Enter
        if ( e.key === 'Enter') {
            e.preventDefault()
            addTask();
            return
        }
    }
}

function addTask() {
    if (input.value.length === 0) {
        // se para la funcion si no hay nada escrito
        return
    }
    // buscamos las nuevas tareas
    const tasks = document.querySelectorAll('.tasks__item')
    // Generamos la tarea
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
    // Añadimos la tarea
    tasksBox.appendChild(newTask);
    input.value = ''
    addEventToBoxes() // añadimos evento al nuevo checkbox
}
/// Añadir tareas termina -->


/// <-- Cambiar estado de tareas inicia

// Añadimos el evento a checkboxs existentes
addEventToBoxes() 

function addEventToBoxes() {
    // buscamos los checkboxes
    const checkBoxes = document.querySelectorAll('.tasks__item__checkbox');

    checkBoxes.forEach(box => {
        box.addEventListener('click', toogleTask)
    });
}
function toogleTask(e) {
    // Guardamos la tarea del checkbox
    const checkTask = e.target.parentElement

    // Averiguamos el estatus y lo cambiamos
    if (checkTask.classList.contains('tasks__item--completed')) {
        setTimeout(() => {
            checkTask.classList.remove('tasks__item--completed')
            tasksBox.append(checkTask)
        }, 300);
    } else {
        setTimeout(() => {
            checkTask.classList.add('tasks__item--completed')
            tasksCompletedBox.append(checkTask)
        }, 300);
    }
    // Se usa setTimeout para esperar la transicion en CSS
}
/// Cambiar estado de tareas termina -->