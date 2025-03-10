exports.get_in = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        lastId: req.session.insertId || -1,
        username: req.session.username || "",
    }

    res.render('login', {
        datosLog: datosLog
    });
}

exports.post_in = (req, res, next) => {
    req.session.isLoggedIn = true;
    req.session.username = req.body.username;
    res.redirect('/');
}

exports.get_out = (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/'); 
    });
}