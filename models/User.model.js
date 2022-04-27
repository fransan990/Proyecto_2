const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    telephone: {
      stype: String
    },
    roles: {
      type: String,
      enum: ["Admin", "User"],
      default: 'User'
    },
    favRecipes: [{
      type: Schema.Types.ObjectId,
      ref: 'Recipe'
    }],
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
