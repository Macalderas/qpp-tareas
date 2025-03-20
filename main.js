import {crearHeader} from "./componet/header /header.js"
import { cargarFormularioLogin } from "./componet/login/login.js";
import {cargarContenidoPrincipal} from "./componet/tareas/principal.js"

function iniciarAplicacion() {
    const root = document.getElementById("root");
    root.innerHTML = ""; 
    root.appendChild(crearHeader());
    cargarFormularioLogin(root, cargarContenidoPrincipal);
}


iniciarAplicacion();    