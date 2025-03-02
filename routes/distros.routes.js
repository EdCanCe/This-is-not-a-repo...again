/**
 * Aquí se encuentran las rutas:
 *  - /distros (GET)
 *  - /distros/add (GET y POST)
 */

const file_system = require('fs'); // Permite gestionar archivos
const express = require('express'); // Importa express
const router = express.Router(); // Usa el router de express ya que el servidor lo manda a llamar

const personas = [];
const distros = [];

//No se añade "/distros", ya que el servidor ya lo está ruteando ahí mismo
router.get('/', (req, res, next) => { 
    res.render('distros');
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
    
    // Manda a mostrar las personas que han votado por alguna distro
    res.render('list_distro.ejs', {
        personas,
        distros,
    });
    
});

module.exports = router;