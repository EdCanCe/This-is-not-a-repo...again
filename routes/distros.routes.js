/**
 * Aquí se encuentran las rutas:
 *  - /distros (GET)
 *  - /distros/add (GET y POST)
 */

const file_system = require('fs'); // Permite gestionar archivos
const express = require('express'); // Importa express
const router = express.Router(); // Usa el router de express ya que el servidor lo manda a llamar

const htmlHeader = ``;

const htmlFooter = ``;

const htmlAdd = ``;

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


const personas = [];
const distros = [];

//No se añade "/distros", ya que el servidor ya lo está ruteando ahí mismo
router.get('/', (req, res, next) => { 
    res.send(htmlHeader + htmlDistros + htmlFooter);
});

// Como ya está "/distros" en el servidor, aquí sería "/distros/add"
router.get('/add', (req, res, next) => {
    res.render('add_distro');
});

router.post('/add', (req, res, next) => {
    const fileName = "encuestas/"+req.body.nombre+".txt";
    file_system.writeFileSync(fileName, req.body.distro);
    personas.push(req.body.nombre);
    distros.push(req.body.distro);

    res.render('list_distro.ejs', {
        personas,
        distros,
    });
});

module.exports = router;