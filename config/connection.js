// require mongoose
const { connect, connection } = require("mongoose");

// set connection to mongoose host
const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialnetworkDB";

//   connect to mongoDB server using connectionString
connect(connectionString);

// export mongoDB connection
module.exports = connection;
