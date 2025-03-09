exports.get_error = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        userName: req.session.userName || "",
    }

    res.status(404).render('error404', {
        datosLog: datosLog
    });
}