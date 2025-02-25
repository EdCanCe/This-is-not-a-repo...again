const file_system = require('fs');
const http = require('http');

const getHTML = (adr) => {
    return file_system.readFileSync(('../lab10/html/'+adr+'.html'), {encoding: 'utf8', flag: 'r'});
}

const header = getHTML("header");
const footer = getHTML("footer");

const getPage = (adr) => {
    return header + getHTML(adr) + footer;
}

const server = http.createServer((request, response) =>{
    
    if (request.method == "GET" && (request.url == "/agregar" || request.url == "/")) {
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write(getPage("main"));
        response.end();
    } else if (request.method == "POST" && request.url == "/agregar") {

        const datos_completos = [];

        request.on('data', (data) => {
            datos_completos.push(data);
            console.log(data);
        });

        request.on('end', () => {
            const string_datos_completos = Buffer.concat(datos_completos).toString();
            console.log(string_datos_completos);
            const new_name = string_datos_completos.split('=')[1];
        });

    } else {
        response.statusCode = 404;

        response.end();
    }

});

server.listen(3000);