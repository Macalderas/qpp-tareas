function cuerpo(descripcion) {
  let div = document.createElement('div');
  div.className = "cuerpo";

  let checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.className = "checkbox-tarea";

  let label = document.createElement('label');
  label.className = "contenedor-tarea";

  let span = document.createElement('span');
  span.textContent = descripcion;

  label.appendChild(checkbox);
  label.appendChild(span);

  div.appendChild(label);

  return div;
}

export { cuerpo };
