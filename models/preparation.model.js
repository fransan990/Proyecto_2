const { Schema, model } = require("mongoose");


const preparationSchema = new Schema(
    {
        name: String,
    },
    {
        timestamps: true
    }
);

const Preparation = model("preparation", preparationSchema);

module.exports = Preparation;