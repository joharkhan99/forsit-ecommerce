const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Product } = require("./models/Product");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
require("dotenv").config();

const app = express();
// Middleware
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
    folder: "products",
  });
  return res.url;
}

app.post("/api/product", upload.single("image"), async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(dataURI);

    const { name, description, price, stock } = req.body;
    const product = new Product({
      name,
      description,
      price,
      stock,
      image: cldRes,
    });

    product.save();
    res.json({ status: "success", message: "Product created successfully" });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", message: "Something went wrong" });
  }
});

// connect mongo and Start the server
const port = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
