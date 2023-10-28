export const validateTitle = (value, campo) => {
    if (value.trim().length <= 3) {
        campo.classList.add('is-invalid');
        campo.classList.remove('is-valid');
        return false;
    }
    
    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
    return true;
}

export const validateHourChat = (value, campo) => {
    if (value.trim().length <= 3) {
        campo.classList.add('is-invalid');
        campo.classList.remove('is-valid');
        return false;
    }
    
    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
    return true;
}


export const validateSpaker = (value, campo) => {
    if (value.trim().length <= 3) {
        campo.classList.add('is-invalid');
        campo.classList.remove('is-valid');
        return false;
    }
    
    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
    return true;
}

export const validateImage = (value, campo) => {
    if (value.trim().length === 0 || value.trim().length > 300 || !/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value)) {
        campo.classList.add('is-invalid');
        campo.classList.remove('is-valid');
        return false;
    }

    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
    return true;
}

