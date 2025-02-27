/**
 * Aquí se encuentran la rutas:
 *  - / (GET)
 *  - /questions (GET)
 *  - /about (GET)
 */

const file_system = require('fs'); // Permite gestionar archivos
const express = require('express'); // Importa express
const router = express.Router(); // Usa el router de express ya que el servidor lo manda a llamar
const path = require('path'); // Permite usar direcciones del sistema

const htmlHeader = ``;

const htmlFooter = ``;

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

router.get(['/', '/main'], (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/questions', (req, res, next) => {
    res.send(htmlHeader + htmlQuestions + htmlFooter);
});

router.get('/about', (req, res, next) => {
    res.send(htmlHeader + htmlAbout + htmlFooter);
});

module.exports = router;