const { Thought, User } = require("../models");
module.exports = {
  // get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find().select("-__v");
      res.json(thoughts);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  //   find a single thought by its ID
  async getSingleThought(req, res) {
    try {
      const thoughts = await Thought.findOne({
        _id: req.params.thoughtId,
      }).select("-__v");

      if (!thoughts) {
        res.status(404).json({ message: "no thoughts found with that id" });
      }
      res.json({ thoughts });
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  //   create a new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: thought._id } },
        { new: true }
      );
      res.json({ message: "created thought", thought });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //   delete a thought by its ID
  async deleteThought(req, res) {
    try {
      const thoughts = await Thought.findOneAndRemove({
        _id: req.params.thoughtId,
      });
      if (!thoughts) {
        res.status(404).json({ message: "no thoughts found with that id" });
      }
      res.json({ message: "deleted thought", thoughts });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //   update a thought by its ID
  async updateThought(req, res) {
    try {
      const thoughts = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!thoughts) {
        res.status(404).json({ message: "no thoughts found with that id" });
      }
      res.json({ message: "updated thought", thoughts });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //   create a reaction for a thought
  async createReaction(req, res) {
    try {
      const thoughts = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      if (!thoughts) {
        res.status(404).json({ message: "no thoughts found with that id" });
      }
      res.json({ message: "created reaction", thoughts });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //   delete a reaction by its ID
  async deleteReaction(req, res) {
    try {
      const thoughts = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { _id: req.params.reactionsId } } },
        { runValidators: true, new: true }
      );
      if (!thoughts) {
        res.status(404).json({ message: "no thoughts found with that id" });
      }
      res.json({ message: "deleted reaction", thoughts });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
