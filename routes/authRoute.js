const route = require('express').Router();
const signUpValidator = require('../validators/auth/signUpValidator');
const loginValidator = require('../validators/auth/loginValidator');

const {
    signUpGetController,
    signUpPostController,

    loginGetController,
    loginPostController,

    logoutGetController
} = require('../controllers/authController');


// Signup Route
route.get('/signup', signUpGetController);
route.post('/signup', signUpValidator, signUpPostController);

// Login Route
route.get('/login', loginGetController);
route.post('/login', loginValidator , loginPostController);

// Logout Route
route.get('/logout', logoutGetController);

module.exports = route;