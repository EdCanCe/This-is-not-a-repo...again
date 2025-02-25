const express = require('express');
const app = express();
const file_system = require('fs');

const getHTML = (adr) => {
    return file_system.readFileSync(('html/'+adr+'.html'), {encoding: 'utf8', flag: 'r'});
}

const header = getHTML("header");
const footer = getHTML("footer");

const getPage = (adr) => {
    return header + getHTML(adr) + footer;
}

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/persona/agregar', (request, response, next) => {
    response.send(getPage("main"));
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);