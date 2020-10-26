const {Schema, model} = require('mongoose');

// Create User Schema
const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        minlength: 4,
        maxlength: 30,
        required: true
    },

    email: {
        type: String,
        trim: true,
        required: true
    },

    password: {
        type: String,
        minlength: 8,
        maxlength: 30,
        required: true
    },

    profile: {
        type: Schema.Types.objectId,
        ref: 'Profile'
    }
}, {timestamps: true});

// Generate model from schema
const User = model('User', UserSchema);

module.exports = User;