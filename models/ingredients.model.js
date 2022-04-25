const { Schema, model } = require("mongoose");


const ingredientsSchema = new Schema(
    {
        name: String,
        NutritionFacts: String

    },
    {
        timestamps: true
    }
);

const Recipe = model("ingredients", ingredientsSchema);

module.exports = Recipe;