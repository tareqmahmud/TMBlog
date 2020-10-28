const User = require('../models/User');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');
const formatValidatorError = require('../utils/formatValidatorError');

/**
 * View signup form
 *
 * @param req
 * @param res
 */
const signUpGetController = (req, res) => {
    return res.render('pages/auth/signup', {
        title: 'Create new account',
        errors: {},
        values: {}
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
    const signUpValidation = validationResult(req).formatWith(formatValidatorError);

    console.log(signUpValidation.mapped());

    if (!signUpValidation.isEmpty()){
        return res.render('pages/auth/signup', {
            title: 'Create new account',
            errors: signUpValidation.mapped(),
            values: {username, email}
        })
    }

    // Hash Password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create the User model object
    const user = new User({
        username,
        email,
        password: hashPassword
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
    return res.render('pages/auth/login', {
        title: 'Login your account',
        errors: {}
    })
}

/**
 * Handle login authentication
 *
 * @param req
 * @param res
 */
const loginPostController = async (req, res) => {
    // Extract the email and password from response
    const {email, password} = req.body;

    // Validate email and password
    const loginValidation = validationResult(req).formatWith(formatValidatorError);

    if (!loginValidation.isEmpty()){
        return res.render('pages/auth/login', {
            title: 'Login your account',
            errors: loginValidation.mapped()
        })
    }

    // Check is user available or not
    const user = await User.findOne({email});

    // If user not available then redirect with error
    if (!user) {
        return res.json({
            message: 'Invalid email or password'
        })
    }

    // If user available then
    const matchedPassword = await bcrypt.compare(password, user.password);

    // If password doesn't match then redirect with error
    if (!matchedPassword) {
        return res.json({
            message: 'Invalid email or password'
        })
    }

    // And, Finally user credentials are correct so
    // Logged in user and redirect to the homepage or dashboard page
    res.redirect('/auth/signup')

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