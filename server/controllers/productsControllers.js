const asyncHandler = require("express-async-handler");

const getProducts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Products" });
});

const postProducts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Set Products" });
});

const updateProducts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update Products" });
});

const deleteProducts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Delete Products" });
});

module.exports = {
  getProducts,
  postProducts,
  updateProducts,
  deleteProducts,
};
