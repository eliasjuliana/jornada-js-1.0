'use strict'

import { generateRandomId } from "../helpers/helpers.js";


export class User {
    constructor(email,contrasenia){
        this.id = generateRandomId();
        this.email = email;
        this.contrasenia = contrasenia;
    }
}