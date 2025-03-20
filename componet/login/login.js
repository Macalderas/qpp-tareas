import {crearFormularioRegistro} from "../tareas/registro.js"

function cargarFormularioLogin(root, cargarContenidoPrincipal) {
    const formularioLogin = crearFormularioLogin(cargarContenidoPrincipal);
    root.appendChild(formularioLogin);
}

function crearFormularioLogin(cargarContenidoPrincipal) {
    const contenedorLogin = document.createElement("section");
    contenedorLogin.className = "login-container";

    const formularioLogin = document.createElement("form");
    formularioLogin.id = "login-form";

    formularioLogin.appendChild(crearCampo("Usuario", "text", "username"));
    formularioLogin.appendChild(crearCampo("Contraseña", "password", "password"));

    const botonEnvio = document.createElement("button");
    botonEnvio.type = "submit";
    botonEnvio.textContent = "Ingresar";
    formularioLogin.appendChild(botonEnvio);

    const botonRegistro = document.createElement("button");
    botonRegistro.type = "button";
    botonRegistro.textContent = "Registrarse";
    botonRegistro.addEventListener("click", () => {
        contenedorLogin.innerHTML = '';
        contenedorLogin.appendChild(crearFormularioRegistro(cargarContenidoPrincipal));
    });
    formularioLogin.appendChild(botonRegistro);

    formularioLogin.addEventListener("submit", async (evento) => {
        evento.preventDefault();
        const username = formularioLogin.username.value.trim();
        const password = formularioLogin.password.value.trim();
        await manejarLogin(username, password, cargarContenidoPrincipal);
    });

    contenedorLogin.appendChild(formularioLogin);
    return contenedorLogin;
}

function crearCampo(labelText, type, name) {
    const grupo = document.createElement("div");
    grupo.className = "input-group";

    const label = document.createElement("label");
    label.htmlFor = name;
    label.textContent = labelText;

    const input = document.createElement("input");
    input.type = type;
    input.id = name;
    input.name = name;
    input.required = true;

    grupo.appendChild(label);
    grupo.appendChild(input);
    return grupo;
}

async function manejarLogin(username, password, cargarContenidoPrincipal) {
    
}

export { cargarFormularioLogin };