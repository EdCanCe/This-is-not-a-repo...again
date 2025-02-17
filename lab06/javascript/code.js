//Arreglos

const arreglo = ["Elemento"];
const arreglo2 = new Array();

arreglo.push("Otro elemento");
arreglo[10] = "Uno más";
arreglo[0] = "Elemento modificado";

//Arreglos asociativos

arreglo["uno"] = 1;

//Recorrido tradicional del arreglo
for(let i=0; i<arreglo.length; i++){
    console.log(arreglo[i]);
}

//Recorrido alternativo del arreglo
for(let posicion in arreglo){
    console.log(posicion);
}

for(let valor of arreglo){
    console.log(valor);
}

//Objetos