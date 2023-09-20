// import the Thought and User model
const { Thought, User } = require("../models");

// data for seeding thoughts
const thoughtData = [
  {
    thoughtText: "I love hiking in the mountains!",
    createdAt: new Date("2023-01-10T12:00:00Z"),
    username: "john_doe",
    reactions: [
      {
        reactionBody: "That sounds amazing!",
        username: "jane_smith",
      },
    ],
  },
  {
    thoughtText: "Just had the best pizza ever!",
    createdAt: new Date("2023-02-15T18:30:00Z"),
    username: "jane_smith",
    reactions: [
      {
        reactionBody: "Where did you get it?",
        username: "john_doe",
      },
    ],
  },
];

const seedThoughts = async () => {
  try {
    // Loop through thoughtData and create thoughts
    for (const thought of thoughtData) {
      const createdThought = await Thought.create(thought);

      // Find the corresponding user and update their thoughts array
      const user = await User.findOne({ username: thought.username });
      user.thoughts.push(createdThought._id);
      await user.save();
    }

    console.log("Thoughts seeded successfully!");
  } catch (error) {
    console.error("Error seeding thoughts:", error);
  }
};

// export seedThoughts
module.exports = seedThoughts;
