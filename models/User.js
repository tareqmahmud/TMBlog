const {Schema, model} = require('mongoose');

// Create User Schema
const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        minlength: 4,
        maxlength: 30,
        required: true,
        unique: true
    },

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    profile: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }
}, {timestamps: true});

// Generate model from schema
const User = model('User', UserSchema);

module.exports = User;