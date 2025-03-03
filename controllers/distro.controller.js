const Distro = require('../models/distro.model');

exports.get_distro = (req, res, next) => { 
    res.render('distros');
}

exports.get_distro_add = (req, res, next) => {
    res.render('add_distro');
}

exports.post_distro_add = (req, res, next) => {
    const mi_Distro = new Distro(req.body.nombre, req.body.distro); // Creo la clase con los datos del form
    mi_Distro.save();

    res.redirect('/distros/list');
}

exports.get_distro_list = (req, res, next) => {
    
    // Manda a mostrar las personas que han votado por alguna distro
    res.render('list_distro.ejs', {
        entrevistas: Distro.fetchAll(),
    });
}