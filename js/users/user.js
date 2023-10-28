import { obtenerContactosDeLS } from "../helpers/utilsReg.js";
import { Contacto } from "../register/Contacto.js";

export const usuarioPreparado = ()=>{

sessionStorage.setItem("user","A@b.com")

  const email = sessionStorage.getItem("user")

    const usuario = obtenerContactosDeLS()
    
    const usuarioEncontrado = usuario.find((item)=>{return item.email == email})

    const inputNombre = document.getElementById("--inputUser-Name")
    const inputEmail = document.getElementById("--inputUser-Email")
    
    inputNombre.value = usuarioEncontrado.nombre
    inputEmail.value = usuarioEncontrado.email
    
    sessionStorage.setItem("user", email)
}

export const editarUsuario = (nombre,email) => {
  const codigo = sessionStorage.getItem("user")
    const usuario = obtenerContactosDeLS();
    
    const posicionUsuario = usuario.findIndex((item)=>item.codigo === codigo)

    const usuarioEditado = new Contacto (nombre,contrasenia,email)

    usuario.splice(posicionUsuario,1,usuarioEditado)

    localStorage.setItem("contactos",JSON.stringify(usuario))

    swal.fire({
        icon: "success",
        title: "Exito",
        text: "La pelicula se editó correctamente",
        customClass: {
          popup: 'colored-toast'
        },
      })
}



