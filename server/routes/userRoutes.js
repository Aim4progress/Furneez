const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getUserStats,
} = require("../controllers/userController");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/protect");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

// UPDATE
router.route("/:id").put(verifyTokenAndAuthorization, updateUser);

// DELETE
router.route("/:id").delete(verifyTokenAndAuthorization, deleteUser);

// GET A PARTICULAR USER
router.route("/find/:id").get(verifyTokenAndAdmin, getUser);

// GET ALL USERS
router.route("/").get(verifyTokenAndAdmin, getAllUsers);

// GET USER STATS
router.route("/stats").get(verifyTokenAndAdmin, getUserStats);

module.exports = router;
