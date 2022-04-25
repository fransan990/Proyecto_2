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

const ingredient = model("ingredient", ingredientSchema);

module.exports = ingredient;