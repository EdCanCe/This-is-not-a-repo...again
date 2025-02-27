document.getElementById("ejercicio1").addEventListener("click", function(){
    let a = Number(prompt("Ingrese un número: "));
    document.getElementById("resp1").innerHTML = "";
    for(let i=1; i<=a; i++){
        let cuadrado = i*i;
        let cubo = i*i*i;
        let resp = "<p>Número: "+i+", Cuadrado: "+cuadrado+", Cubo: "+cubo+"</p>";

        //Usted pidió document.write, sin embargo así la página ya no se podría ver, si se descomenta la línea siguiente, y se comenta la de después, funcionaría como usted lo pide.

        //document.write(resp);
        document.getElementById("resp1").innerHTML += resp;
    }
});

document.getElementById("ejercicio2").addEventListener("click", function(){
    let fechaBase = Date.now();
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10); 
    let c = a+b;
    let d = Number(prompt(a+" + "+b+" = "));
    let fechaFinal = Date.now();
    let tiempoUsado = (fechaFinal - fechaBase)/1000;
    let resp = "<p>El usuario se tardó "+tiempoUsado+" segundos, y respondió " + (d==c ? "correctamente" : ("incorrectamente, la respuesta correcta era "+c))+".</p>";

    document.getElementById("resp2").innerHTML = resp;
});

function contador(numeros){
    let menor=0, ceros=0, mayor=0;
    numeros.forEach(i => {
        if(i<0) menor++;
        else if(i==0) ceros++;
        else mayor++;
    });
    let resp = {};
    resp["menor"] = menor;
    resp["ceros"] = ceros;
    resp["mayor"] = mayor;
    return resp;
}

function promedio(matriz){
    let resp = {};
    let i = 0;
    matriz.forEach(arreglo => {
        resp[i] = 0;
        arreglo.forEach( a => {
            resp[i] += a;
        });
        resp[i] /= arreglo.length;
        i++;
    });
    return resp;
}

function reverso(numero){
    let resp = 0;
    while(numero>0){
        resp *= 10;
        resp += numero%10;
        numero -= numero%10;
        numero /= 10;
    }
    return resp;
}

"use strict";

class Ram{
    constructor(run, given){
        this.run = run;
        this.given = given;
    }

    getRun(){
        return this.run;
    }

    getGiven(){
        return this.given;
    }
}

class Sorts{
    shellSort(v){
        let gap = Math.floor(v.length/2);
        while(gap>0){
            for(let i=gap; i<v.length; i++){
                for(let j=i; j>=gap && v[j].getRun()<v[j-gap].getRun(); j-=gap){
                    let a = v[j];
                    v[j] = v[j-gap];
                    v[j-gap] = a;
                }
            }
            gap = Math.floor(gap/2);
        }
    }
}

function solve(){
    //El readline solo funciona en Codeforces
    let q = Number(readline());

    for(let i=0; i<q; i++) {
        let read = readline().split(" ");
        let n = Number(read[0]);
        let ram = Number(read[1]);
        
        let rams = [];
        let v = [];
        
        read = readline().split(" ");
        for(let j=0; j<n; j++) {
            v.push(Number(read[j]));
        }
        
        read = readline().split(" ");
        for(let j=0; j<n; j++) {
            rams.push(new Ram(v[j], Number(read[j])));
        }

        let sorter = new Sorts();
        sorter.shellSort(rams);

        let j = 0;
        while(j<n && rams[j].getRun() <= ram) {
            ram += rams[j].getGiven(); 
            j++;
        }

        print(ram);
    }
}

solve();