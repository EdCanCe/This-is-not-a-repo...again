const boton = document.getElementById("boton");

const alertar = () => {
    let a;
    a = prompt("Dame un número: ");
    alert("El numero dado fue "+a);
}

boton.onclick = alertar;