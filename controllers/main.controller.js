exports.get = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        userName: req.session.userName || "",
    }

    res.render('main', {
        datosLog: datosLog
    });
}


exports.get_questions = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        userName: req.session.userName || "",
    }

    res.render('questions', {
        datosLog: datosLog
    });
}

exports.get_about = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        userName: req.session.userName || "",
    }

    res.render('about', {
        datosLog: datosLog
    });
}