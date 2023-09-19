// import mongoose components
const { Schema, model } = require("mongoose");

// create schema for User model
const userSchema = new Schema({
  // define username with constraints
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

  // define email with constraints and email validation
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
  },

  // define thoughts as an array that references the thought model
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "thought",
    },
  ],

  // define friends as an array that references the user model (self-reference)
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

// export User model
const User = model("user", userSchema);
module.exports = User;
