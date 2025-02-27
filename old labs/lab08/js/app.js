const file_system = require('fs');
const http = require('http');

let arreglo = [1,2,3,4,5,6,7,8,9,10];

const promedio = (arr) => {
    let acum = 0;
    for(let i of arr){
        acum += i;
    }
    return "El promedio es " + acum/arr.length;
};

const pasarTexto = (msj) => {
    file_system.writeFileSync('mensaje.txt', msj);
}

const normalizar = (msj) => {
    return msj.toLowerCase();
}

const problema = () => {
    console.log("\nSe va a realizar el problema: https://codeforces.com/contest/522/problem/A\nEn caso de querer modificar la entrada, modificar el archivo input.txt");

    let inputSolo = file_system.readFileSync('inputProblema.txt', {encoding: 'utf8', flag: 'r'});
    console.log("La entrada a tomar en cuenta es:\n\n"+inputSolo+"\n");

    let inputEnLineas = inputSolo.split("\n");
    let queries = Number(inputEnLineas[0]);

    let usuarios = {};
    let valor = 0;

    usuarios["polycarp"] = 1;

    for(let i=1; i<=queries; i++){
        let inputIndividual = inputEnLineas[i].split(" ");  
        let usuario1 = normalizar(inputIndividual[0]);
        let usuario2 = normalizar(inputIndividual[2]);
        usuarios[usuario1] = usuarios[usuario2]+1 || 1;
        valor = Math.max(valor, usuarios[usuario1]);
    }

    console.log("Dando como valor final: "+valor);
}

const renderizarHTML = (noLab) => {
    if(![1,3,4,5,6].includes(noLab)) noLab = 6;

    let pagina = file_system.readFileSync(('../lab0'+noLab+'/index.html'), {encoding: 'utf8', flag: 'r'});

    const server = http.createServer((request, response) =>{
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write(pagina);
        response.end();
    });
     
    server.listen(3000);    
}

console.log(promedio(arreglo));
pasarTexto("Este es un documento creado en node.");
problema();
renderizarHTML(1);