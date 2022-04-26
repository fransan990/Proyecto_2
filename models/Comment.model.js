const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        recipe: {
            type: Schema.Types.ObjectId,
            ref: 'Recipe'
        },
        description: String
    },
    {
        timestamps: true
    }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;