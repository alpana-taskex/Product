const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.route.js");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoutes);

// GET API
app.get("/", (req, res) => {
  res.send("Hello ");
});

// Mongoose connection
mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("connect to database");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

// Server connection
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
