const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { tryCatch } = require("../utils/tryCatch");

// REGISTER USER
// const registerUser = asyncHandler(async (req, res) => {
const registerUser = tryCatch(async (req, res, next) => {
  // Destructure the body of the request
  const { username, email, password } = req.body;

  // Check if any of the fields (username, email, password) are not present in the request
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check if user already exists
  const userExits = await User.findOne({ email });

  if (userExits) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash the password got from the client
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create a new user (when the user registers)
  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  // If user was created successfully
  if (newUser) {
    res.status(201).json({
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      token: generateJWT(newUser.id, newUser.isAdmin),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// LOGIN USER
// const loginUser = asyncHandler(async (req, res) => {
const loginUser = tryCatch(async (req, res, next) => {
  const { email, password } = req.body;

  // Check if any of the email or password is not provided in the request
  if (!email || !password) {
    res.status(400);
    throw new Error("Please provide Both email and the password");
  }

  // Check if email is present in the DB
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      id: user.id,
      username: user.username,
      email: user.email,
      token: generateJWT(user.id, user.isAdmin),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// A function to GENERATE JWT ( this function will take in the user id as the parameter)
const generateJWT = (id, isAdmin) => {
  return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// UPDATE USER
const updateUser = tryCatch(async (req, res, next) => {
  // User might change his/her password , so encrypt the password again
  if (req.body.password) {
    // Hash the password got from the client
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
  }

  // 👇 Update the user
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).select("-password");

  // If the above code fails (i.e. when there is an error in the updating )
  if (!updatedUser) {
    res.status(400);
    throw new Error(error);
  }

  res.status(200).json(updatedUser);
});

// DELETE USER
const deleteUser = tryCatch(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  res.status(200).json("User has been deleted...");
});

// GET A PARTICULAR USER
const getUser = tryCatch(async (req, res, next) => {
  const user = await User.findById(req.params.id).select("-password");
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  res.status(200).json({
    user,
  });
});

// GET ALL USERs
const getAllUsers = tryCatch(async (req, res, next) => {
  const query = req.query.new;

  // Return only the LATEST user when the query is "new=true"
  const users =
    query === "true"
      ? await User.find().sort({ _id: -1 }).limit(1)
      : await User.find();

  res.status(200).json({
    users,
  });
});

// GET USER STATS
const getUserStats = tryCatch(async (req, res, next) => {

  const currentDate = new Date();
  const lastYear = new Date(currentDate.setFullYear(currentDate.getFullYear()-1));

  
});

module.exports = {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getUserStats,
};
