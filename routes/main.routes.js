/**
 * Aquí se encuentran la rutas:
 *  - / y /main (GET)
 *  - /questions (GET)
 *  - /about (GET)
 */

const express = require('express'); // Importa express
const router = express.Router(); // Usa el router de express ya que el servidor lo manda a llamar

router.get(['/', '/main'], (req, res, next) => {
    res.render('main');
});

router.get('/questions', (req, res, next) => {
    res.render('questions');
});

router.get('/about', (req, res, next) => {
    res.render('about');
});

module.exports = router;