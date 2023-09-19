// require packages
const express = require("express");
const db = require("./config/connection");

// import routes
const routes = require("./routes");

// set PORT number
const PORT = process.env.PORT || 3001;

// create express app
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// run server
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
  });
});
