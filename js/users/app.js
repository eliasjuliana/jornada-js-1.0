
import { obtenerContactosDeLS } from "../helpers/utilsReg.js"
import { editarUsuario, usuarioPreparado } from "./user.js"

usuarioPreparado()

const btnSubmit = document.getElementById("--btnUser_Save")

btnSubmit.addEventListener("submit",(e)=> {
    e.preventDefault()

const email = sessionStorage.getItem("user")
const usuario = obtenerContactosDeLS()
    
const usuarioEncontrado = usuario.find((item)=>{return item.email === email})
    
const inputNombre = document.getElementById("--inputUser-Name")
const inputEmail = document.getElementById("--inputUser-Email")
    
inputNombre.value = usuarioEncontrado.nombre
inputEmail.value = usuarioEncontrado.email

editarUsuario(inputNombre,inputEmail)
sessionStorage.setItem("user",JSON.stringify(email))
} )

console.log(btnSubmit)