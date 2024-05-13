const express = require("express");
const {
  getProducts,
  getProduct,
  createProduct,
  updatedProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

const router = express.Router();

// Get all products
router.get("/", getProducts);

// Get one product
router.get("/:id", getProduct);

// Create a new product
router.post("/", createProduct);

// Update a product value
router.put("/:id", updatedProduct);

// Delete a product list
router.delete("/:id", deleteProduct);

module.exports = router;
