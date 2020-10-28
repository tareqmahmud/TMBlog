const {body} = require('express-validator');
const User = require('../../models/User');

module.exports = [
    // Validate the username
    body('username')
        .isLength({min: 4, max: 30})
        .withMessage('Username has to be the length of 4 to 30')
        .custom(async (username) => {
            const user = await User.findOne({username});

            if (user) {
                return Promise.reject('Username already taken');
            }

            return true;
        })
        .trim(),

    // Validate the email
    body('email')
        .not()
        .isEmpty()
        .withMessage('The email field is required')
        .isEmail()
        .withMessage('Please enter proper email address')
        .custom(async (email) => {
            const user = await User.findOne({email});

            if (user){
                return Promise.reject('Email already exists');
            }

            return true;
        })
        .normalizeEmail(),

    // Validate password
    body('password')
        .isLength({min: 8})
        .withMessage('Password has to be at least 8 chars'),

    // Validate confirm password
    body('confirmPassword')
        .custom((password, {req}) => {
            if (password !== req.confirmPassword){
                throw new Error('Confirm password does\'t match with the password')
            }

            return true;
        })

]