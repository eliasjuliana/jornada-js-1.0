'use strict'
import { agregarContactoALS } from "../helpers/helpers.js";
import { Contacto } from "../register/Contacto.js";
import { añadirContacto } from "../register/abm.js";
import { User } from "./User.js";


const isLogged = JSON.parse(sessionStorage.getItem('isLogged'));
if (isLogged) {

window.location.href = './admin/admin.html';
}


const adminUser = new Contacto('admin', '12349', 'admin@gmail.com');
agregarContactoALS(adminUser)

const users = JSON.parse(localStorage.getItem('contactos'));

const formLogin = document.getElementById('form-login');
const emailInput = document.getElementById('email-login');
const contraseniaInput = document.getElementById('contrasenia-login');
const credentialsAlert = document.getElementById('credentials-alert');


formLogin.addEventListener('submit', (e) => {  
  e.preventDefault();

  const email = emailInput.value;
  const contrasenia = contraseniaInput.value;

  console.log(email, contrasenia)

  // const isEmail =  validarEmail(email, emailInput)
  // const isContrasenia = validarContrasenia(contrasenia, contraseniaInput)

  const user = users.find((item) => item.email === email)
  
  if (user) {
    console.log(user)
    
    if(user.contrasenia === contrasenia){

    emailInput.classList.remove('is-invalid');
    contraseniaInput.classList.remove('is-invalid');

    sessionStorage.setItem('isLogged', true);
    sessionStorage.setItem('user', JSON.stringify(email));
    
    if (email === adminUser.email) {

      credentialsAlert.classList.add('d-none');

    
      swal.fire({
        title: 'BIENVENIDO',
        timer: 2000,
        imageUrl: '../assets/logos/logo-blanco.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'foto bienvenida rolling code school',
        showConfirmButton: false,
        background: '#202020',
        color: '#f9f9f9',
      })
      .then(() => {
        window.location.href = '../index.html';
    });
  } else {
  credentialsAlert.classList.remove('d-none');
}
  } else {
    alert('Usuario y contraseña no válidos.')
  }
} else {
credentialsAlert.classList.remove('d-none');
alert('Usuario y contraseña no válidos.')
}

});


