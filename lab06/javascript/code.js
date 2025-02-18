const boton = document.getElementById("boton");
const contrasenaContainer1 = document.getElementById("contrasena-container-1");
const contrasena1 = document.getElementById("contrasena-1");
const contrasenaStatus1 = document.getElementById("contrasena-1-status");
const contrasenaContainer2 = document.getElementById("contrasena-container-2");
const contrasena2 = document.getElementById("contrasena-2");
const contrasenaStatus2 = document.getElementById("contrasena-2-status");
const comentarioFinal = document.getElementById("comentario-final-contrasena");

const mostrarEscribe1 = () => {
    boton.classList.add("hidden");
    contrasena2.disabled = false;
    contrasena2.value = "";
    contrasenaContainer2.classList.remove("block");
    contrasenaContainer2.classList.add("hidden");
    contrasena1.disabled = false;
    contrasena1.value = "";
    contrasenaContainer1.classList.remove("block");
    contrasenaContainer1.classList.add("hidden");
    contrasenaContainer1.classList.remove("hidden");
    contrasenaContainer1.classList.add("block");
    comentarioFinal.classList.add("hidden");
    comentarioFinal.classList.remove("block");
    contrasenaStatus1.classList.remove("text-emerald-600");
    contrasenaStatus1.classList.add("text-rose-600");
    contrasenaStatus1.innerHTML = "NO VALIDA";
    contrasena1.classList.remove("text-neutral-700");
    contrasenaStatus2.classList.remove("text-emerald-600");
    contrasenaStatus2.classList.add("text-rose-600");
    contrasenaStatus2.innerHTML = "CONTRASEÑAS DISTINTAS";
    contrasena2.classList.remove("text-neutral-700");
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
        contrasena1.disabled = true;
        contrasenaContainer2.classList.remove("hidden");
        contrasenaContainer2.classList.add("block");
        contrasena1.classList.add("text-neutral-700");
        contrasenaStatus1.innerHTML = "";
    }else{
        alert("La contraseña no puede llevar espacios, tiene que llevar más de 8 caracteres, llevar al menos una mayúscula, una minúscula y un caracter especial");
    }
}

const guardarcontrasenaContainer2 = () => {
    if(contrasena1.value == contrasena2.value){
        contrasena2.disabled = true;
        comentarioFinal.classList.remove("hidden");
        comentarioFinal.classList.add("block");
        contrasenaStatus1.innerHTML = "";
        contrasena2.classList.add("text-neutral-700");
    }else{
        alert("Las contraseñas no son iguales. Borrando...");
        contrasena2.disabled = false;
        contrasena2.value = "";
        contrasenaContainer2.classList.remove("block");
        contrasenaContainer2.classList.add("hidden");
        contrasena1.disabled = false;
        contrasena1.value = "";
        contrasenaContainer1.classList.remove("block");
        contrasenaContainer1.classList.add("hidden");
    }
    boton.classList.add("block");
    boton.classList.remove("hidden");
}

const verificarContrasena1 = () => {
    if(verificarContrasena(contrasena1.value)){
        contrasenaStatus1.classList.remove("text-rose-600");
        contrasenaStatus1.classList.add("text-emerald-600");
        contrasenaStatus1.innerHTML = "VÁLIDA";
    }else{
        contrasenaStatus1.classList.add("text-rose-600");
        contrasenaStatus1.classList.remove("text-emerald-600");
        contrasenaStatus1.innerHTML = "NO VALIDA";
    }
}

const verificarContrasena2 = () => {
    if(contrasena2.value == contrasena1.value){
        contrasenaStatus2.classList.remove("text-rose-600");
        contrasenaStatus2.classList.add("text-emerald-600");
        contrasenaStatus2.innerHTML = "CONTRASEÑAS IGUALES";
    }else{
        contrasenaStatus2.classList.add("text-rose-600");
        contrasenaStatus2.classList.remove("text-emerald-600");
        contrasenaStatus2.innerHTML = "CONTRASEÑAS DISTINTAS";
    }
}

boton.onclick = mostrarEscribe1;
contrasena1.onchange = guardarcontrasenaContainer1;
contrasena1.oninput = verificarContrasena1;
contrasena2.onchange = guardarcontrasenaContainer2;
contrasena2.oninput = verificarContrasena2;
