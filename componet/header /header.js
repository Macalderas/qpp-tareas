function crearHeader() {
    let header = document.createElement("header")
    header.className="header"

    let logo=document.createElement("img")
    logo.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgmQrf6HPr9y_-0v2cA_ukaBwJFb3sRpnvg&s"
    logo.alt="Rocas "
    header.appendChild(logo)
   
   let h1=document.createElement("h1")
   h1.textContent="to-list"

   header.appendChild(h1)
    return header
  }

  export{ crearHeader};