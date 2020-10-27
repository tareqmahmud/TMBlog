const {Schema, model} = require('mongoose');

const commentSchema = new Schema({
    post: {
        type: Schema.Types.objectId,
        ref: 'Post',
        required: true
    },

    user: {
        type: Schema.Types.objectId,
        ref: 'User',
        required: true
    },

    body: {
        type: String,
        trim: true,
        required: true
    },

    replies: [{
        body: {
            type: String,
            trim: true,
            required: true
        },

        user: {
            type: Schema.Types.objectId,
            ref: 'User',
            required: true
        },

        createdAt: {
            type: Date,
            default: new Date()
        }
    }]
}, {timestamps: true});

const Comment = model('Comment', commentSchema);

module.exports = Comment;