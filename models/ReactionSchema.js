// import mongoose components
const { Schema, Types } = require("mongoose");

// create new reactionSchema Schema
const reactionSchema = new Schema({
  // define reactionId with constraints
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },

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
