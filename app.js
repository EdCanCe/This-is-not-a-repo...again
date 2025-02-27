const express = require('express'); // Importa express
const app = express(); // Llamar express de forma más rápida
const bodyParser = require('body-parser'); // Importa body-parser
const path = require('path'); // Permite usar direcciones del sistema


// Permite leer el cuerpo de las solicitudes, es decir, permite leer los datos de un POST
app.use(bodyParser.urlencoded({extended: false}));

// Le dice que va a usar la carpeta public como carpeta estática
app.use(express.static(path.join(__dirname, 'public')));

const mainRoutes = require('./routes/main.routes.js');
app.use('/', mainRoutes);

const distroRoutes = require('./routes/distros.routes.js');
app.use('/distros', distroRoutes);

app.use((req, res) => {
    res.status(404).send("Página no encontrada :C");
});

app.listen(3000);