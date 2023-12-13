function userSession() {
    return function(req, res, next) {
        if (req.session.errors) {
            res.locals.errors = req.session.errors;
            delete req.session.errors;
        }
        if (req.session.user) {
            res.locals.user = req.session.user;
            res.locals.hasUser = true;
        }
        next();
    };
}

module.exports = userSession;