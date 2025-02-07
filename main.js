import { crearHeader } from "./componet/header /header.js"
import { cuerpo } from "./componet/cuerpo/cuerpo.js"
import { formulario } from "./componet/formulario/formulario.js"

let DOM =document.getElementById("root")

DOM.appendChild(crearHeader());
DOM.appendChild(cuerpo("Create icons for a dashboard")); 
DOM.appendChild(cuerpo("Prepare a design presentation.")); 
DOM.appendChild(cuerpo("Stretch for 15 minutes"));
DOM.appendChild(cuerpo("Plan your meal")); 
DOM.appendChild(cuerpo("Review daily goals before sleeping. Add some new if time permits")); 
DOM.appendChild(cuerpo("Water indoor plants")); 

DOM.appendChild(formulario());