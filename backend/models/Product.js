const { default: mongoose } = require("mongoose");

// Define a product schema and model
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  stock: Number,
  image: String,
});

const Product = mongoose.model("Product", productSchema);
exports.Product = Product;
