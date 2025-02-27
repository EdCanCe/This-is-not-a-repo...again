/**
 * Aquí se encuentran la rutas:
 *  - / (GET)
 *  - /questions (GET)
 *  - /about (GET)
 *  - Para error 404
 */

const file_system = require('fs'); // Permite gestionar archivos
const express = require('express'); // Importa express
const router = express.Router(); // Usa el router de express ya que el servidor lo manda a llamar

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

const htmlMain = `
<h1 class="text-4xl font-bold text-center text-slate-100 mb-6">PÁGINA DE INICIO</h1>
<p>Se pueden acceder a las siguientes páginas:</p>
<ul class="list-disc list-inside">
    <li><a class="underline" href="/">Página de inicio</a></li>
    <li><a class="underline" href="/questions">Preguntas</a></li>
    <li><a class="underline" href="/about">Sobre mí</a></li>
    <li><a class="underline" href="/distros">Distribuciones de Linux</a></li>
    <li><a class="underline" href="/distros/add">Preguntas</a></li>
</ul>
`;

const htmlQuestions = `
<h1 class="text-4xl font-bold text-center text-slate-100 mb-6">PREGUNTAS</h1>
<p class="font-bold">Describe el archivo package.json:</p>
<br>
<p>El archivo package.json tiene la información del proyecto en que se está trabajando. Tiene información de su versión, su nombre, su creador, la licencia que usa, los scripts que ejecuta, etc. Y algo que cabe la pena mencionar, es que también es usado para guardar la información de los paquetes de npm que usa.</p>
`;

const htmlAbout = `
<h1 class="text-4xl font-bold text-center text-slate-100 mb-6">SOBRE MÍ</h1>
<p>Mi nombre es Edmundo Canedo Cervantes</p>
<p>Mi matrícula es A01645576</p>
<p>Mi correo es edcance.dev@gmail.com</p>
<p>Uso Fedora como sistema operativo</p>
`;

router.get('/', (req, res, next) => {
    res.send(htmlHeader + htmlMain + htmlFooter);
});

router.get('/questions', (req, res, next) => {
    res.send(htmlHeader + htmlQuestions + htmlFooter);
});

router.get('/about', (req, res, next) => {
    res.send(htmlHeader + htmlAbout + htmlFooter);
});

module.exports = router;