// server.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { Product } = require("./models/Product");
const app = express();
const cors = require("cors");

// Connect to MongoDB (make sure MongoDB is running)
// mongoose.connect("mongodb://localhost/productDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Middleware
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API Routes
app.post("/api/products", (req, res) => {
  res.status(201).json({ message: "Product added successfully" });

  // const { name, description, price, stock } = req.body;

  // const product = new Product({
  //   name,
  //   description,
  //   price,
  //   stock,
  // });

  // product.save((err) => {
  //   if (err) {
  //     console.error(err);
  //     res.status(500).json({ error: "Error saving product" });
  //   } else {
  //     res.status(201).json({ message: "Product added successfully" });
  //   }
  // });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
