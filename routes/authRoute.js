const route = require('express').Router();
const {
    signUpGetController,
    signUpPostController,

    loginGetController,
    loginPostController,

    logoutGetController
} = require('../controllers/authController');


// Signup Route
route.get('/signup', signUpGetController);
route.post('/signup', signUpPostController);

// Login Route
route.get('/login', loginGetController);
route.post('/login', loginPostController);

// Logout Route
route.get('/logout', logoutGetController);

module.exports = route;