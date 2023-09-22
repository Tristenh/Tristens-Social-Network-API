// import mongoose components
const { Schema } = require("mongoose");

// create new reactionSchema Schema
const reactionSchema = new Schema({
  // define reactionBody with constraints
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },

  // define username with constraints

  username: {
    type: String,
    required: true,
  },

  // define createdAt using Date.now and using getter formated to local time
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAt) => {
      return new Date(createdAt).toLocaleDateString();
    },
  },
});

// export reactionSchema
module.exports = reactionSchema;
