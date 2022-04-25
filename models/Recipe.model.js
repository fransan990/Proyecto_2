const { Schema, model } = require("mongoose");


const recipeSchema = new Schema(
    {
        name: String,
        imagen: String,
        User: [{
            type: Schema.Types.ObjectId,
            ref: 'User'                             // Nombre del modelo referenciado
        }],
        category: String,
        ingredients: [{
            type: Schema.Types.ObjectId,
            ref: 'ingredients'                             // Nombre del modelo referenciado
        }],
        preparation: [{
            type: Schema.Types.ObjectId,
            ref: 'preparation'                             // Nombre del modelo referenciado
        }],
        location: {
            type: {
                type: String
            },
            coordinates: [Number]
        },
        comment: String,
    },


    {
        timestamps: true
    }
);

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;