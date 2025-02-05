import { crearHeader } from "./componet/header /header.js"
import { formulario } from "./componet/formulario/formulario.js"
import { cuerpo } from "./componet/cuerpo/cuerpo.js"

let DOM =document.getElementById("root")

DOM.appendChild(crearHeader())
DOM.appendChild(tarea())
DOM.appendChild(formulario())