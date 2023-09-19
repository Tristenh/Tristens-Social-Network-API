// require express
const router = require("express").Router();

// import routes
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");

// middleware for route endpoints
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

// export router
module.exports = router;
