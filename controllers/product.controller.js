const productModel = require("../models/product.model.js");

// Get API
const getProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "error.message" });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "error.message" });
  }
};

// Post API
const createProduct = async (req, res) => {
  try {
    const product = await productModel.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "error.message" });
  }
};

// Update API
const updatedProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await productModel.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await productModel.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "error.message" });
  }
};

// Delete API
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await productModel.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "error.message " });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updatedProduct,
  deleteProduct,
};
