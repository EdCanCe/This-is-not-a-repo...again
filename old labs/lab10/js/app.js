const file_system = require('fs');
const http = require('http');

const saveData = (arr) => {
    let msg = "";
    for(let i of arr){
        msg += i + "\n";
    }
    file_system.writeFileSync('datos.txt', msg);
}

const getHTML = (adr) => {
    return file_system.readFileSync(('../lab10/html/'+adr+'.html'), {encoding: 'utf8', flag: 'r'});
}

const header = getHTML("header");
const footer = getHTML("footer");
const main = getHTML("main");
const adder = getHTML("agregar");
const extra = getHTML("extra");
const about = getHTML("sobre");
const error404 = getHTML("error");

const people = []

const stringPeople = (arr) => {
    let msg = "";
    for(let i of arr){
        msg += "<p>" + i + "</p>";
    }
    return msg;
};

const server = http.createServer((request, response) =>{

    // Ruta base
    if (request.method == "GET" && request.url == "/") { // El tener la url como / significa que no hay nada después
        response.setHeader('Content-Type', 'text/html');
        response.write(header + main + footer);
        response.end();
    }
    
    // Ruta agregar
    else if (request.method == "GET" && request.url == "/agregar") {
        response.setHeader('Content-Type', 'text/html');
        response.write(header + adder + stringPeople(people) + footer);
        response.end();
    } else if (request.method == "POST" && request.url == "/agregar") {

        const completeData = [];

        request.on('data', (data) => {
            completeData.push(data);
        });

        request.on('end', () => {
            const stringCompleteData = decodeURIComponent(Buffer.concat(completeData).toString()).replace(/\+/g, " ");
            const newName = stringCompleteData.split('=')[1];
            people.push(newName);
            saveData(people);

            response.setHeader('Content-Type', 'text/html');
            response.write(header + adder + stringPeople(people) + footer);
            response.end();
        });
    }

    // Ruta about
    else if (request.method == "GET" && request.url == "/about") {
        response.setHeader('Content-Type', 'text/html');
        response.write(header + about + footer);
        response.end();
    }

    // Ruta extra
    else if (request.method == "GET" && request.url == "/extra") {
        response.setHeader('Content-Type', 'text/html');
        response.write(header + extra + footer);
        response.end();
    }

    // Ruta de error 404
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write(header + error404 + footer);
        response.end();
    }

});

server.listen(3000);