const {Schema, model} = require('mongoose');
const User = require('./User');
const Comment = require('./Comment');

const postSchema = new Schema({
    title: {
        type: String,
        trim: true,
        maxlength: 200,
        required: true
    },

    body: {
        type: String,
        required: true
    },

    author: {
        type: Schema.Types.objectId,
        ref: User,
        required: true
    },

    tags: [{
        type: String,
        required: true
    }],

    thumbnail: String,

    readTime: String,

    likes: [
        {
            type: Schema.Types.objectId,
            ref: User
        }
    ],
    dislikes: [{
        type: Schema.Types.objectId,
        ref: User
    }],

    comments: [{
        type: Schema.Types.objectId,
        ref: Comment
    }]
}, {timestamps: true});

const Post = model('Post', postSchema);

module.exports = Post;