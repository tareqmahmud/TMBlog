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
const signUpPostController = (req, res) => {

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