/**
 * Aquí se encuentran la rutas:
 *  - /main (GET)
 *  - /questions (GET)
 *  - /about (GET)
 *  - Para error 404
 */

const file_system = require('fs'); // Permite gestionar archivos
const express = require('express'); // Importa express
const router = express.Router(); // Usa el router de express ya que el servidor lo manda a llamar

const htmlHeader = "";

router.get('/', (req, res, next) => { // Se le pone solamente /, ya que para acceder aquí se ingresa a través de /main
    res.send("<h1>xD</h1>");
    file_system.writeFileSync("prueba.txt", "A");
});

module.exports = router;