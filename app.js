const express = require('express'); // Importa express
const app = express(); // Llamar express de forma más rápida
const bodyParser = require('body-parser'); // Importa body-parser
const path = require('path'); // Permite usar direcciones del sistema
const session = require('express-session');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

// Permite leer el cuerpo de las solicitudes, es decir, permite leer los datos de un POST
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs'); // Establece ejs como su motor de plantillas
app.set('views', 'views'); // Establece el directorio donde express buscará los archivos de las vistas

// Le dice que va a usar la carpeta public como carpeta estática
app.use(express.static(path.join(__dirname, 'public')));

const mainRoutes = require('./routes/main.routes.js');
app.use('/', mainRoutes);

const distroRoutes = require('./routes/distros.routes.js');
app.use('/distros', distroRoutes);

const logRoutes = require('./routes/log.routes.js');
app.use('/log', logRoutes);

app.use((req, res) => {
    res.status(404).render('error404');
});

app.listen(3000);