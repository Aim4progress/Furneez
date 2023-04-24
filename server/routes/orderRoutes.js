const express = require("express");
const router = express.Router();
const {
  getProducts,
  postProducts,
  updateProducts,
  deleteProducts,
} = require("../controllers/productsControllers");

router.route("/").get(getProducts).post(postProducts);
router.route("/:id").put(updateProducts).delete(deleteProducts);

module.exports = router;
