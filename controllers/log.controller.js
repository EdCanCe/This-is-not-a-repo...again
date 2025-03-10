const User = require('../models/user.model');
const bcrypt = require('bcryptjs')


exports.get_in = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        lastId: req.session.insertId || -1,
        username: req.session.username || "",
        isNew: false,
    }

    res.render('login', {
        datosLog: datosLog
    });
}

exports.post_in = (req, res, next) => {
    User.fetchAll(req.body.username).then(([rows, fieldData]) => {
        console.log(rows);
        if(rows.length > 0){
            req.session.isLoggedIn = true;
            req.session.username = req.body.username;
            res.redirect('/');
        } else {
            res.redirect('/log/none');
        }
    })

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
        isNew: true,
    }

    res.render('login', {
        datosLog: datosLog
    });
}

exports.post_new = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        lastId: req.session.insertId || -1,
        username: req.session.username || "",
        isNew: true,
    }

    const mi_Usuario = new User(req.body.username, req.body.password); // Creo la clase con los datos del form

    mi_Usuario.save()
        .then(() => {
            res.redirect('/log/in');
        })
        .catch(err => console.log(err));
}