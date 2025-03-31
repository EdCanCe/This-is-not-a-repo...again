module.exports = (req, res, next) => {
    for (let privilege of req.session.privileges) {
        if (privilege.summary == "Modifica votación") {
            return next();
        }
    }
    return res.status(403).send("Tus acciones han sido registradas y reportadas al superadmin");
}