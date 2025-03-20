function crearHeader() {
  const header = document.createElement("header");
  header.className = "header";

  const logo = document.createElement("img");
  logo.src = "https://preview.redd.it/place-this-is-tux-v0-r0dxfbzngxq81.jpg?auto=webp&s=2f935ae1fda3d313794c911727cbe46fe7091d3a"; 
  logo.alt = "Formulario";
  header.appendChild(logo);

  const h1 = document.createElement("h1");
  h1.textContent = "Formulario  ";
  header.appendChild(h1);

  return header;
}

export { crearHeader };