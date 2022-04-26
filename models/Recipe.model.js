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
        ingredients: [{
            type: Schema.Types.ObjectId,
            ref: 'Ingredient'
        }],
        preparation: String,
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
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }],
    },

    {
        timestamps: true
    }
);

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;