exports.get = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        lastId: req.session.insertId || -1,
        username: req.session.username || "",
        message: req.session.message || "",
        privileges: req.session.privileges || [],
    }
    req.session.message = "";

    res.render('main', {
        datosLog: datosLog
    });
}


exports.get_questions = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        lastId: req.session.insertId || -1,
        username: req.session.username || "",
        message: req.session.message || "",
        privileges: req.session.privileges || [],
    }
    req.session.message = "";

    res.render('questions', {
        datosLog: datosLog
    });
}

exports.get_about = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        lastId: req.session.insertId || -1,
        username: req.session.username || "",
        message: req.session.message || "",
        privileges: req.session.privileges || [],
    }
    req.session.message = "";

    res.render('about', {
        datosLog: datosLog
    });
}

exports.get_pokemon =(req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        lastId: req.session.insertId || -1,
        username: req.session.username || "",
        message: req.session.message || "",
        privileges: req.session.privileges || [],
    }
    
    res.render('pokemon', {
        datosLog: datosLog
    });
}