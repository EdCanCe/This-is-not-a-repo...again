const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

exports.get_in = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        lastId: req.session.insertId || -1,
        username: req.session.username || "",
        message: req.session.message || "",
        isNew: false,
        privileges: req.session.privileges || [],
    }
    req.session.message = "";

    res.render('login', {
        datosLog: datosLog,
        csrfToken: req.csrfToken(),
    });
}

exports.post_in = (req, res, next) => {
    User.fetchOne(req.body.username).then(([rows, fieldData]) => {
        if(rows.length > 0){
            bcrypt.compare(req.body.password, rows[0].passwd).then((doMatch) => {
                if (doMatch) {
                    User.getPrivileges(rows[0].username).then(([privileges, fieldData]) => {
                        req.session.isLoggedIn = true;
                        req.session.username = req.body.username;
                        req.session.userID = rows[0].id;
                        req.session.privileges = privileges;
                        req.session.message = "Ha iniciado sesión con éxito!";
                        console.log("Debud controller log: ");
                        console.log(req.session.privileges);
                        return req.session.save((error) => {
                            res.redirect('/'); // Si no hay errores al guardar la sesión, redirige
                        });
                    }).catch(err => console.log(err));
                } else {
                    req.session.message = "Contraseña incorrecta";
                    res.redirect('/log/in');
                }
            }).catch(err => console.log(err));
        } else {
            req.session.message = "No hay un usuario con ese nombre";
            res.redirect('/log/in');
        }
    }).catch(err => console.log(err));
}

exports.get_out = (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/'); 
    });
}

exports.get_new = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        lastId: req.session.insertId || -1,
        username: req.session.username || "",
        message: req.session.message || "",
        isNew: true,
        privileges: req.session.privileges || [],
    }
    req.session.message = "";

    res.render('login', {
        datosLog: datosLog,
        csrfToken: req.csrfToken(),
    });
}

exports.post_new = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        lastId: req.session.insertId || -1,
        username: req.session.username || "",
        message: req.session.message || "",
        isNew: true,
        privileges: req.session.privileges || [],
    }

    const mi_Usuario = new User(req.body.username, req.body.password); // Creo la clase con los datos del form

    mi_Usuario.save()
        .then(() => {
            req.session.message = "Se ha creado el usuario con éxito!";
            res.redirect('/log/in');
        })
        .catch(err => console.log(err));
}