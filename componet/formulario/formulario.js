import { obtenerTareas } from "../formulario/tarea.js";
import { handleCheckbox } from "../formulario/check.js";

async function formulario() {
    const footer = document.createElement("footer");
    footer.className = "form_tareas";

    const tareas = await obtenerTareas();
    tareas.forEach((tarea, index) => {
        const div = document.createElement("div");
        div.className = "div_tareas";
        div.innerHTML = `
            <input type="checkbox" id="tarea-${index}">
            <label for="tarea-${index}">${tarea.nombre}</label>
        `;
        const checkbox = div.querySelector(`input[type="checkbox"]`);
        const label = div.querySelector(`label`);
        handleCheckbox(checkbox, label, div);
        footer.appendChild(div);
    });

    footer.appendChild(crearFormularioTarea());
    return footer;
}

function crearFormularioTarea() {
 
}

export { formulario };