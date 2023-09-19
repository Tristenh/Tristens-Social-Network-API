// require express
const router = require("express").Router();

// import api routes
const apiRoutes = require("./api");

// middleware for api endpoint
router.use("/api", apiRoutes);

// middleware for wrong route
router.use((req, res) => res.send("wrong route!"));

// export router
module.exports = router;
