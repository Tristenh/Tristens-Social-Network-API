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

// CRUD operations for freinds associated with the userId
router.route("/:userId/friends/").post(addFriend);

// CRUD operation for deleteing freinds associated with the userId
router.route("/:userId/friends/:friends").delete(deleteFriend);

// export router
module.exports = router;
