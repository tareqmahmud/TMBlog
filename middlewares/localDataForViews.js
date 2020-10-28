module.exports = () => {
    return (req, res, next) => {
        res.locals.isLoggedIn = req.session.isLoggedIn;
        res.locals.user = req.user;
        return next();
    }
}