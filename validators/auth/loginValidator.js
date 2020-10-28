const {body} = require('express-validator');

module.exports = [
    // Email validator
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email field is required')
        .isEmail()
        .withMessage('Please enter a proper email'),

    // Password validator
    body('password')
        .not()
        .isEmpty()
        .withMessage('Password field is required')
]