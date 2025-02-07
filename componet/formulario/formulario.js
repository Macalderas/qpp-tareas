let footer = document.createElement('footer');
footer.className = 'partes_Formulario';

let taskInput = document.createElement('input');
taskInput.type = 'text';
taskInput.placeholder = 'Write a task...';
taskInput.className = 'partes_Formulario-input';

let addButton = document.createElement('button');
addButton.innerText = 'Add';
addButton.className = 'partes_Formulario-button';

addButton.onclick = () => {
    if (taskInput.value.trim()) {
        taskInput.value = '';
    }
};

taskInput.onkeypress = (e) => {
    if (e.key === 'Enter' && taskInput.value.trim()) addButton.click();
};

footer.append(taskInput, addButton);

document.body.appendChild(footer);

export { footer };
