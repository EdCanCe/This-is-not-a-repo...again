exports.get_error = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        lastId: req.session.insertId || -1,
        username: req.session.username || "",
        message: req.session.message || "",
    }
    req.session.message = "";

    res.status(404).render('error404', {
        datosLog: datosLog
    });
}