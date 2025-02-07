
function cuerpo( descripcion) {
  let div = document.createElement('div');
  div.className = "cuerpo";

  let boton = document.createElement('div');
  boton.className = "Boton";
  boton.addEventListener("click", function () {
    boton.classList.toggle("activo"); 
  });

  div.appendChild(boton);

   let content = document.createElement('div');

  
  let p = document.createElement('p');
  p.textContent = descripcion;
  content.appendChild(p);

  div.appendChild(content);

  return div;
}

export { cuerpo };