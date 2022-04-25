const { Schema, model } = require("mongoose");


const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    telephone: { type: Number },
    roles: {
      type: String,
      enum: ["Admin", "Usuario"],
    },
    comment: String,

  },

  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
