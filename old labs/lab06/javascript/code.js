const boton = document.getElementById("boton");
const contrasenaContainer1 = document.getElementById("contrasena-container-1");
const contrasena1 = document.getElementById("contrasena-1");
const contrasenaStatus1 = document.getElementById("contrasena-1-status");
const contrasenaContainer2 = document.getElementById("contrasena-container-2");
const contrasena2 = document.getElementById("contrasena-2");
const contrasenaStatus2 = document.getElementById("contrasena-2-status");
const comentarioFinal = document.getElementById("comentario-final-contrasena");

const mostrarElemento = (elemento) => {
    elemento.classList.add("block");
    elemento.classList.remove("hidden");
}

const ocultarElemento = (elemento) => {
    elemento.classList.remove("block");
    elemento.classList.add("hidden");
}

const validarGuia = (elemento, mensaje) => {
    elemento.classList.remove("text-rose-600");
    elemento.classList.add("text-emerald-600");
    elemento.innerHTML = mensaje;
}

const invalidarGuia = (elemento, mensaje) => {
    elemento.classList.add("text-rose-600");
    elemento.classList.remove("text-emerald-600");
    elemento.innerHTML = mensaje;
}

const habilitarInput = (elemento) => {
    elemento.disabled = false;
    elemento.value = "";
    elemento.classList.remove("text-neutral-700");
}

const inhabilitarInput = (elemento) => {
    elemento.disabled = true;
    elemento.classList.add("text-neutral-700");
}

const mostrarEscribe1 = () => {
    ocultarElemento(boton);
    mostrarElemento(contrasenaContainer1);
    habilitarInput(contrasena1);
    invalidarGuia(contrasenaStatus1, "NO VÁLIDA");
    ocultarElemento(contrasenaContainer2);
    habilitarInput(contrasena2);
    invalidarGuia(contrasenaStatus2, "CONTRASEÑAS DISTINTAS");
    ocultarElemento(comentarioFinal);
}

const verificarContrasena = (contrasena) => {
    if(contrasena.length <= 8) return false;
    if(/\s/.test(contrasena)) return false;
    if(!/[A-ZÑ]/.test(contrasena)) return false;
    if(!/[a-zn]/.test(contrasena)) return false;
    if(!/[-?@#*,.]/.test(contrasena)) return false;
    return true;
}

const guardarcontrasenaContainer1 = () => {
    if(verificarContrasena(contrasena1.value)){
        inhabilitarInput(contrasena1);
        contrasenaStatus1.innerHTML = "";
        mostrarElemento(contrasenaContainer2);
    }else{
        alert("La contraseña no puede llevar espacios, tiene que llevar más de 8 caracteres, llevar al menos una mayúscula, una minúscula y un caracter especial");
    }
}

const guardarcontrasenaContainer2 = () => {
    if(contrasena1.value == contrasena2.value){
        inhabilitarInput(contrasena2);
        contrasenaStatus2.innerHTML = "";
        mostrarElemento(comentarioFinal);
    }else{
        alert("Las contraseñas no son iguales. Borrando...");
        ocultarElemento(contrasenaContainer1);
        ocultarElemento(contrasenaContainer2);
    }
    mostrarElemento(boton);
}

const verificarContrasena1 = () => {
    if(verificarContrasena(contrasena1.value)){
        validarGuia(contrasenaStatus1, "VÁLIDA");
    }else{
        invalidarGuia(contrasenaStatus1, "NO VÁLIDA");
    }
}

const verificarContrasena2 = () => {
    if(contrasena1.value == contrasena2.value){
        validarGuia(contrasenaStatus2, "CONTRASEÑAS IGUALES");
    }else{
        invalidarGuia(contrasenaStatus2, "CONTRASEÑAS DISTINTAS");
    }
}

boton.onclick = mostrarEscribe1;
contrasena1.onchange = guardarcontrasenaContainer1;
contrasena1.oninput = verificarContrasena1;
contrasena2.onchange = guardarcontrasenaContainer2;
contrasena2.oninput = verificarContrasena2;
