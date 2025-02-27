/**
 * Aquí se encuentran las rutas:
 *  - /distros (GET)
 *  - /distros/add (GET y POST)
 */

const file_system = require('fs'); // Permite gestionar archivos
const express = require('express'); // Importa express
const router = express.Router(); // Usa el router de express ya que el servidor lo manda a llamar
const path = require('path'); // Permite usar direcciones del sistema

const htmlHeader = `<!DOCTYPE html>
<html lang="es">
   <head>
        <title>Laboratorio 10</title>
        <meta charset="UTF-8"> 
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
        <script src="https://cdn.tailwindcss.com"></script>
   </head>
   <body class="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white font-[Poppins]">
        <div class="max-w-2xl w-full p-8 bg-slate-800 rounded-lg shadow-lg">
            <header class="text-center text-lg italic mb-4">Edmundo Canedo Cervantes - A01645576</header>`;

const htmlFooter = `<footer class="text-center text-sm italic mt-8">Para realizar esta página, se utilizó <a href="https://code.visualstudio.com/" class="text-slate-300 hover:text-slate-100">Visual Studio Code</a></footer>
        </div>
    </body>
</html>
`;

const htmlDistros = `
<h1 class="text-4xl font-bold text-center text-slate-100 mb-6">Distrubuciones de Linux:</h1>
<p>Hay varias distribuciones de Linux, algunas de las principales, son:</p>
<ul class="list-disc list-inside">
    <li>Ubuntu</li>
    <li>Debian</li>
    <li>Arch</li>
    <li>Fedora</li>
    <li>CentOS</li>
</ul>
<p>Quienes usan Arch, muchas veces te dirán "I use arch BTW".</p>
<a class="underline" href="/add">Dime cuál es tu favorita</a>
`;

const htmlAdd = `
<form action="/distros/add" method="POST" class="space-y-4">
    <div>
        <label for="nombre" class="block text-sm mb-2">¿Cuál es tu nombre?</label>
        <input type="text" id="nombre" name="nombre" class="w-full p-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600" required placeholder="Ingresa tu nombre">
    </div>

    <div>
        <label for="distro" class="block text-sm mb-2">Selecciona tu distro favorita de Linux:</label>
        <select name="distro" id="distro" class="w-full p-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600">
            <option value="ubuntu">Ubuntu</option>
            <option value="debian">Debian</option>
            <option value="fedora">Fedora</option>
            <option value="arch">Arch</option>
            <option value="centos">CentOS</option>
            <option value="no_he_usado">No he usado</option>
        </select>
    </div>

    <button type="submit" class="w-full p-3 mt-4 rounded-md bg-slate-600 text-white hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 cursor-pointer">Enviar</button>
</form>
`

const personas = [];
const distros = [];

//No se añade "/distros", ya que el servidor ya lo está ruteando ahí mismo
router.get('/', (req, res, next) => { 
    res.send(htmlHeader + htmlDistros + htmlFooter);
});

// Como ya está "/distros" en el servidor, aquí sería "/distros/add"
router.get('/add', (req, res, next) => {
    res.send(htmlHeader + htmlAdd + htmlFooter);
});

router.post('/add', (req, res, next) => {
    const fileName = "encuestas/"+req.body.nombre+".txt";
    file_system.writeFileSync(fileName, req.body.distro);
    personas.push(req.body.nombre);
    distros.push(req.body.distro);

    let html = htmlHeader + htmlAdd + "<br><p>Las siguientes personas han votado: </p>";

    for(let i=0; i<personas.length; i++){
        html += "<p>" + personas[i] + ": " + distros[i] + "</p>";
    }
    res.send(html + htmlFooter);
});

module.exports = router;