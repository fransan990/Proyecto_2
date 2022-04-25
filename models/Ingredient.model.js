const { Schema, model } = require("mongoose");

const ingredientSchema = new Schema(
    {
        name: String,
        kcal: Number,
        protein: Number,
        fat: Number,
        carbs: Number
    },
    {
        timestamps: true
    }
);

const Ingredient = model("Ingredient", ingredientSchema);

module.exports = Ingredient;