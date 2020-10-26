const {Schema, model} = require('mongoose');

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
        ref: 'User',
        required: true
    },

    tags: [{
        type: String,
        required: true
    }],

    thumbnail: String,

    readTime: String,

    likes: [Schema.Types.objectId],
    dislikes: [Schema.Types.objectId],

    comments: [{
        type: Schema.Types.objectId,
        ref: 'Comment'
    }]
}, {timestamps: true});

const Post = model('Post', postSchema);

module.exports = Post;