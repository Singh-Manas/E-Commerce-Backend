const check = (req, res, next) => {
    if(req.session.User.role === "Super-Admin") {
        // next();
        res.status(200).send("Success");
    } else {
        res.status(401).send("Needs to be Super Admin");
    }
}

module.exports = check;