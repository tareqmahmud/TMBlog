const {Schema, model} = require('mongoose');
const Post = require('./Post');
const User = require('./User');

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.objectId,
        ref: User,
        required: true
    },

    title: {
        type: String,
        trim: true,
        maxlength: 100
    },

    bio: {
        type: String,
        trim: true,
        maxlength: 500
    },

    profilePic: {
        type: String,
    },

    links: {
        website: String,
        facebook: String,
        twitter: String,
        github: String
    },

    posts: [
        {
            type: Schema.Types.objectId,
            ref: Post

        }
    ],

    bookmarks: [
        {
            type: Schema.Types.objectId,
            ref: Post
        }
    ]


}, {timestamps: true});

const Profile = model('Profile', ProfileSchema);

module.exports = Profile;