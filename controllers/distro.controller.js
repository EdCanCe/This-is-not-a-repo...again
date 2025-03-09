const Distro = require('../models/distro.model');

exports.get_distro = (req, res, next) => { 
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        userName: req.session.userName || "",
    }

    res.render('distros', {
        datosLog: datosLog
    });
}

exports.get_distro_add = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        userName: req.session.userName || "",
    }

    res.render('add_distro', {
        datosLog: datosLog
    });
}

exports.post_distro_add = (req, res, next) => {
    const mi_Distro = new Distro(req.body.nombre, req.body.distro); // Creo la clase con los datos del form
    mi_Distro.save();

    res.setHeader('Set-Cookie', `La última distro fue: ${mi_Distro.distro}`)

    res.redirect('/distros/list');
}

exports.get_distro_list = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        userName: req.session.userName || "",
    }
    
    // Manda a mostrar las personas que han votado por alguna distro
    res.render('list_distro.ejs', {
        entrevistas: Distro.fetchAll(),
        datosLog: datosLog
    });
}