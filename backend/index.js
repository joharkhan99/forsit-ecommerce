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
    var level = "Low";
    if (stock > 100) {
      level = "High";
    } else if (stock > 50) {
      level = "Average";
    }

    const product = new Product({
      name,
      description,
      price,
      stock,
      image: cldRes,
      level,
    });

    product.save();
    res.json({ status: "success", message: "Product created successfully" });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: "Something went wrong! Please try again",
    });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching products" });
  }
});

app.get("/api/analysis", async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const totalProductsLastMonth =
      (await Product.find({
        createdAt: {
          $gte: new Date(
            new Date().getFullYear(),
            new Date().getMonth() - 1,
            1
          ),
          $lt: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        },
      }).length) || 0;

    const totalRevenue =
      (await Product.aggregate([
        {
          $group: {
            _id: null,
            totalRevenue: { $sum: "$price" },
          },
        },
      ])) || 0;

    const lastMonthRevenue = await Product.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(
              new Date().getFullYear(),
              new Date().getMonth() - 1,
              1
            ),
            $lt: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          },
        },
      },
      {
        $group: {
          _id: null,
          lastMonthRevenue: { $sum: "$price" },
        },
      },
    ]);

    const totalStock =
      (await Product.aggregate([
        {
          $group: {
            _id: null,
            totalStock: { $sum: "$stock" },
          },
        },
      ])) || 0;

    const lastMonthStock = await Product.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(
              new Date().getFullYear(),
              new Date().getMonth() - 1,
              1
            ),
            $lt: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          },
        },
      },
      {
        $group: {
          _id: null,
          lastMonthStock: { $sum: "$stock" },
        },
      },
    ]);

    const newProducts = await Product.find({
      createdAt: { $gte: new Date().setDate(new Date().getDate() - 7) },
    }).countDocuments();

    const currentYear = new Date().getFullYear();

    // Define an array of months
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Initialize an array to store the sums for each month
    const monthlySums = Array(12).fill(0);

    // Query the database to get product prices for the current year
    const products = await Product.find({
      createdAt: {
        $gte: new Date(`${currentYear}-01-01`),
        $lte: new Date(`${currentYear}-12-31T23:59:59.999`),
      },
    });

    // Calculate the sums for each month
    products.forEach((product) => {
      const monthIndex = new Date(product.createdAt).getMonth();
      monthlySums[monthIndex] += product.price;
    });

    const stockMonthlySums = {
      High: Array(12).fill(0),
      Average: Array(12).fill(0),
      Low: Array(12).fill(0),
    };

    const stocks = await Product.find({
      createdAt: {
        $gte: new Date(`${currentYear}-01-01`),
        $lte: new Date(`${currentYear}-12-31T23:59:59.999`),
      },
    });

    stocks.forEach((product) => {
      const monthIndex = new Date(product.createdAt).getMonth();
      if (product.level === "High") {
        stockMonthlySums.High[monthIndex] += product.stock;
      } else if (product.level === "Average") {
        stockMonthlySums.Average[monthIndex] += product.stock;
      } else if (product.level === "Low") {
        stockMonthlySums.Low[monthIndex] += product.stock;
      }
    });

    res.json({
      cardsData: {
        stockChartData: {
          months: months,
          data: stockMonthlySums,
        },
        revenueChartData: {
          months: months,
          data: monthlySums,
        },
        productsCard: { totalProducts, totalProductsLastMonth },
        revenueCard: {
          totalRevenue: totalRevenue[0]["totalRevenue"],
          lastMonthRevenue: lastMonthRevenue[0]["lastMonthRevenue"],
        },
        stockCard: {
          totalStock: totalStock[0]["totalStock"],
          lastMonthStock: lastMonthStock[0]["lastMonthStock"],
        },
        newProductsCard: {
          newProducts,
        },
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching products" });
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
