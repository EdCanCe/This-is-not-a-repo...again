module.exports = (req, res, next) => {
    console.log("AAA", req.session.privileges);
    for (let privilege of req.session.privileges) {
        if (privilege.summary == "Añade votación") {
            return next();
        }
    }
    return res.status(403).send("Tus acciones han sido registradas y reportadas al superadmin");
}