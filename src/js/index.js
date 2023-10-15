// variabales
const input = document.getElementById('FormInput');
const button = document.getElementById('FormButton');
const tasksBox = document.getElementById('TasksBox');
const tasksCompletedBox = document.getElementById('TasksCompletedBox');
// generamos un placeholder estilo Google
const placeholder = document.getElementById('Placeholder')


/// <-- Añadir tareas inicia
button.addEventListener('click', addTask);
window.addEventListener('keydown', enter);

function enter(e) {
    // Validamos si nuestro input este activo
    if (document.activeElement === input) {
        // si se empieza a escribir algo se mueve nuestro placeholder
        placeholder.classList.add('form__span--active')
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
    // regresamos el placeholder a su position original
    placeholder.classList.remove('form__span--active')

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

/// <-- Cambiar color de acento inicia
const changeColorButton = document.getElementById('ChangeColorButton')
const changeColorContainer = document.querySelector('.change__accentColor')
const buttonColors = document.querySelectorAll('.color')
const root = document.documentElement

const colors = {
    blue: '#94ADCF',
    yellow: '#ffef69',
    orange: '#fb916a',
    green: '#61bc84',
    pink: '#ffadad',
}
changeColorButton.addEventListener('click', () => {
    if (changeColorContainer.classList.contains('opacity')) {
        changeColorContainer.classList.remove('opacity')
    } else {
        changeColorContainer.classList.add('opacity')
    }
})
buttonColors.forEach(button => {
    button.addEventListener('click', () => {
        root.style.setProperty('--secondary', colors[button.id])
        changeColorContainer.classList.remove('opacity')
    })
});
/// Cambiar color de acento termina -->