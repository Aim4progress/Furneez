const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { tryCatch } = require("../utils/tryCatch");
const { errorHandler } = require("../middleware/errorMiddleware");

// const verifyToken = asyncHandler(async (req, res, next) => {
const verifyToken = tryCatch(async (req, res, next) => {
  // Initialize a variable called "token" which will store the JWT present in the headers of the request
  let token;

  // Check if the "authorization" header field is present in the headers object of the request & also if that "authorization" field starts with "Bearer"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // If the above conditions are true , then get the token from the "authorization" header
    token = req.headers.authorization.split(" ")[1];

    // After getting the token from the request, verify the token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(403);
        throw new Error("Token is not valid");
      } else {
        req.user = decoded;
        next();
      }
    });
  }
  // If no token present in the request
  else {
    res.status(401);
    throw new Error("Not authorized and no token");
  }
});

// const verifyTokenAndAuthorization = asyncHandler(async (req, res, next) => {
const verifyTokenAndAuthorization = tryCatch(async (req, res, next) => {
  verifyToken(req, res, (err) => {
    if (err) {
      return errorHandler(err, req, res, next);
    }
    // Only update a user if ➡ 1. The user who is logged in has passed his/her id in the params (i.e. the logged in user tries to update his/her user details)  OR   2. The user is the Admin
    if (req.user.id === req.params.id || req.user.isAdmin) {
      // 👇 Continue to the controller of the update user
      next();
    } else {
      res.status(403);
      throw new Error("Not authorized to do that");
    }
  });
});

const verifyTokenAndAdmin = tryCatch(async (req, res, next) => {
  verifyToken(req, res, (err) => {
    if (err) {
      return errorHandler(err, req, res, next);
    }
    if (req.user.isAdmin) {
      // 👇 Continue to the controller
      next();
    } else {
      res.status(403);
      throw new Error("Not authorized to do that");
    }
  });
});

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
