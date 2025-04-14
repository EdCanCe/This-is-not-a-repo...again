const Distro = require('../models/distro.model');
const moment = require('moment');

exports.get_distro = (req, res, next) => { 
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        lastId: req.session.insertId || -1,
        username: req.session.username || "",
        message: req.session.message || "",
        privileges: req.session.privileges || [],
    }
    req.session.message = "";

    res.render('distros', {
        datosLog: datosLog
    });
}

exports.get_distro_add = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        lastId: req.session.insertId || -1,
        username: req.session.username || "",
        message: req.session.message || "",
        privileges: req.session.privileges || [],
    }
    req.session.message = "";

    res.render('add_distro', {
        datosLog: datosLog,
        csrfToken: req.csrfToken(),
    });
}

exports.post_distro_add = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        lastId: req.session.insertId || -1,
        username: req.session.username || "",
        message: req.session.message || "",
        userId: req.session.userID || 0,
        privileges: req.session.privileges || [],
    }

    const mi_Distro = new Distro(datosLog.userId, req.body.distro); // Creo la clase con los datos del form

    mi_Distro.save()
        .then(([result]) => {
            req.session.insertId = result.insertId
            res.redirect('/distros/list');
        })
        .catch(err => console.log(err));
}

exports.get_distro_list = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        lastId: req.session.insertId || -1,
        username: req.session.username || "",
        message: req.session.message || "",
        privileges: req.session.privileges || [],
    }
    req.session.message = "";
    
    // Manda a mostrar las personas que han votado por alguna distro

    Distro.fetchAll() // Obtiene la query de la base de datos
        .then(([rows, list_distro]) => { // Si la query es exitosa, manda a renerizarla con los datos de su row
            console.log(rows);
            res.render('list_distro', {
                entrevistas: rows[0],
                datosLog: datosLog
            });
        })
        .catch(err => console.log(err));
}

exports.get_distro_id = (req, res, next) => {
    const distro = req.params.distro;

    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        lastId: req.session.insertId || -1,
        username: req.session.username || "",
        message: req.session.message || "",
        privileges: req.session.privileges || [],
    }
    req.session.message = "";

    Distro.fetchByDistro(distro)
        .then(([rows, list_distro]) => {
            
            for(let i = 0; i < rows.length; i++){
                rows[i].createdAt = (moment(new Date(rows[i].createdAt))).format('ddd, MMM DD, YYYY');
            }

            res.render('oneDistro', {
                entrevistas: rows,
                datosLog: datosLog,
                distro: distro
            });
        })
        .catch(err => console.log(err))
}

exports.get_distro_modify = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        lastId: req.session.insertId || -1,
        username: req.session.username || "",
        message: req.session.message || "",
        privileges: req.session.privileges || [],
    }
    req.session.message = "";

    Distro.fetchById(datosLog.lastId)
        .then(([rows, list_distro]) => {
            res.render('modifyDistro', {
                entrevistas: rows,
                datosLog: datosLog,
                csrfToken: req.csrfToken(),
            });
        })
        .catch(err => console.log(err))
}

exports.post_distro_modify = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        lastId: req.session.insertId || -1,
        username: req.session.username || "",
        message: req.session.message || "",
        userId: req.session.userID || 0,
        privileges: req.session.privileges || [],
    }
    req.session.message = "";

    const mi_Distro = new Distro(datosLog.userId, req.body.distro, datosLog.lastId); // Creo la clase con los datos del form

    mi_Distro.modify()
        .then(([result]) => {
            res.redirect('/distros/list');
        })
        .catch(err => console.log(err));
}