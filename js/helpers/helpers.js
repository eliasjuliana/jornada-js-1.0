'use strict'

import { obtenerContactosDeLS, ordenarLista } from "./utilsReg.js";


export const generateRandomId = () => {
 return self.crypto.randomUUID();
};

export const agregarContactoALS = (nuevoContacto) => {
const contactos = ordenarLista(obtenerContactosDeLS());
contactos.push(nuevoContacto);
localStorage.setItem('contactos',JSON.stringify(contactos));
}
