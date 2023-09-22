// import mongoose components
const { Schema, model } = require("mongoose");

// import reactionSchema
const reactionSchema = require("./ReactionSchema");

// create schema for Thought model
const thoughtSchema = new Schema(
  {
    // define thoughtText with constraints
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },

    // define createdAt using Date.now and using getter formated to local time
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAt) => {
        return new Date(createdAt).toLocaleDateString();
      },
    },

    // define username with constraints
    username: {
      type: String,
      required: true,
    },

    // reference reactions Schema as array
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// Create a virtual property `reactionCount` that gets the amount of reactions per post
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// export Thought model
const Thought = model("thought", thoughtSchema);
module.exports = Thought;
