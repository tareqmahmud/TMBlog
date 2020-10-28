const route = require('express').Router();
const signUpValidator = require('../validators/auth/signUpValidator');
const loginValidator = require('../validators/auth/loginValidator');
const {isAuthenticated, isNotAuthenticated} = require('../middlewares/authMiddleware');

const {
    signUpGetController,
    signUpPostController,

    loginGetController,
    loginPostController,

    logoutGetController
} = require('../controllers/authController');


// Signup Route
route.get('/signup', isNotAuthenticated, signUpGetController);
route.post('/signup', isNotAuthenticated, signUpValidator, signUpPostController);

// Login Route
route.get('/login', isNotAuthenticated, loginGetController);
route.post('/login', isNotAuthenticated, loginValidator, loginPostController);

// Logout Route
route.get('/logout', isAuthenticated, logoutGetController);

module.exports = route;