const User = require('../models/User');

module.exports = () => {
    return async (req, res, next) => {
        const isLoggedIn = req.session.isLoggedIn;

        // If user logged in then find the user
        if (isLoggedIn) {
            const user = await User.findById(req.session.userId);

            // If user is available then bind the user with object
            if (user) {
                req.user = user;
                return next();
            }
        }

        return next();
    }
}