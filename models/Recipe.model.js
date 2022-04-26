const { Schema, model } = require("mongoose");


const recipeSchema = new Schema(
    {
        name: String,
        image: String,
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        category: String,
        ingredient: [{
            type: Schema.Types.ObjectId,
            ref: 'ingredients'
        }],
        preparation: [String],
        restaurant: {
            name: String,
            location: {
                type: {
                    type: String
                },
                coordinates: [Number]
            }
        },
        comments: [{
            owner: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
        }],
    },

    {
        timestamps: true
    }
);

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;