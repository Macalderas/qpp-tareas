function cuerpo(descripcion) {
  let div = document.createElement('div');
  div.className = "cuerpo";

  // Crear un checkbox en lugar de un botón
  let checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.className = "checkbox-tarea";

  // Crear un label para envolver el checkbox y el texto
  let label = document.createElement('label');
  label.className = "contenedor-tarea";

  // Crear un span para el texto de la tarea
  let span = document.createElement('span');
  span.textContent = descripcion;

  // Añadir el checkbox y el texto al label
  label.appendChild(checkbox);
  label.appendChild(span);

  // Añadir el label al div principal
  div.appendChild(label);

  return div;
}

export { cuerpo };