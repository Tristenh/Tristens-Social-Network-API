// import the User model
const { User } = require("../models");

// data for seeding users
const userData = [
  {
    username: "john_doe",
    email: "john@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "jane_smith",
    email: "jane@example.com",
    thoughts: [],
    friends: [],
  },
];
const seedUsers = async () => {
  try {
    const users = await User.insertMany(userData);

    // Update the friends array with ObjectId values
    users[0].friends.push(users[1]._id); // John is friends with Jane
    users[1].friends.push(users[0]._id); // Jane is friends with John

    // Save the updated users
    await Promise.all(users.map((user) => user.save()));

    console.log("Users seeded successfully!");
  } catch (error) {
    console.error("Error seeding users:", error);
  }
};

// export seedUsers
module.exports = seedUsers;
