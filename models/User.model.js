const { Schema, model } = require("mongoose");


const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    telephone: { type: String },
    roles: {
      type: String,
      enum: ["Admin", "User"],
      default: 'User'
    },
    fact: String,

  },

  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
