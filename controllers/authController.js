const User = require('../models/User');

/**
 * View signup form
 *
 * @param req
 * @param res
 */
const signUpGetController = (req, res) => {
    res.render('pages/auth/signup', {
        title: 'Create new account'
    })
};

/**
 * Save signup data and create new user
 *
 * @param req
 * @param res
 */
const signUpPostController = async (req, res) => {
    // Extract all the form request data
    const {username, email, password, confirmPassword} = req.body;

    // Add validation here

    // Create the User model object
    const user = new User({
        username,
        email,
        password
    });

    // Save the object to the database
    const createdUser = await user.save();

    // Redirect to the login page
    return res.redirect('/auth/login');
}

/**
 * View login form
 *
 * @param req
 * @param res
 */
const loginGetController = (req, res) => {
    res.render('pages/auth/login', {
        title: 'Login your account'
    })
}

/**
 * Handle login authentication
 *
 * @param req
 * @param res
 */
const loginPostController = (req, res) => {

}

/**
 * Logout user if logged in
 *
 * @param req
 * @param res
 */
const logoutGetController = (req, res) => {

}

module.exports = {
    signUpGetController,
    signUpPostController,

    loginGetController,
    loginPostController,

    logoutGetController
}