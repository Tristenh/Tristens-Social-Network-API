// require express
const router = require("express").Router();

// require CRUD operations from userController.js
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// default route for users
router.route("/").get(getUsers).post(createUser);

// CRUD operations for userId
router.route("/:userId").get(getSingleUser).delete(deleteUser).put(updateUser);

// CRUD operation for deleteing friends associated with the userId
router.route("/:userId/friends/:friends").put(addFriend).delete(deleteFriend);

// export router
module.exports = router;
