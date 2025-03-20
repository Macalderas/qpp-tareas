import { formulario } from "../formulario/formulario.js";

async function cargarContenidoPrincipal() {
    const root = document.getElementById("root");
    root.innerHTML = ""; 
    root.appendChild(await formulario());
}

export { cargarContenidoPrincipal };