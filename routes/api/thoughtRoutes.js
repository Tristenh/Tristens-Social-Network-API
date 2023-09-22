// require express
const router = require("express").Router();

// require CRUD operations from thoughtController.js
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// default route for thoughts
router.route("/").get(getThoughts).post(createThought);

// CRUD operations by thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .delete(deleteThought)
  .put(updateThought);

//   CRUD operations for reactions associated with a thought by getting the thoughtId
router.route("/:thoughtId/reactions").post(createReaction);

// CRUD operation to delete a reaction associated with the thoughtId
router.route("/:thoughtId/reactions/:reactions").delete(deleteReaction);

//   export router
module.exports = router;
