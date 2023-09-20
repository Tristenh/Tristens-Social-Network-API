// import mongoDB connection
const connection = require("../config/connection");

// import user and thought seeds
const seedUsers = require("./user-seeds");
const seedThoughts = require("./thought-seeds");

// make connection to mongoDB
connection.once("open", async () => {
  // Delete the users if they exist

  let userCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (userCheck.length) {
    await connection.dropCollection("users");
  }

  //   Delete the thoughts if they exist
  let thoughtCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection("thoughts");
  }

  // function to seed data
  const seedAll = async () => {
    console.log("\n----- DATABASE SYNCED -----\n");
    await seedUsers();
    console.log("\n----- USERS SEEDED -----\n");
    await seedThoughts();
    console.log("\n----- THOUGHTS SEEDED -----\n");

    // exit the process after seeding
    process.exit(0);
  };

  // call seedAll the start seeding
  seedAll();
});
