exports.get_error = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        lastId: req.session.insertId || -1,
        username: req.session.username || "",
    }

    res.status(404).render('error404', {
        datosLog: datosLog
    });
}