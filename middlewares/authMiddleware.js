/**
 * Middleware to check user authenticated or not
 * If authenticated then pass to next middleware
 * Otherwise redirect to login page
 *
 * @param req
 * @param res
 * @param next
 */
module.exports.isAuthenticated = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/auth/login');
    }

    return next();
}

/**
 * Middleware to check user authenticated or not
 * If not authenticated the pass to next middleware
 * Otherwise redirect to the dashboard page
 *
 * @param req
 * @param res
 * @param next
 */
module.exports.isNotAuthenticated = (req, res, next) => {
    if (req.user) {
        return res.redirect('/dashboard');
    }

    return next();
}