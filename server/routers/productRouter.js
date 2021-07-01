const express = require("express");
const expressasynchandler = require("express-async-handler");
const data = require("../data");
const Product = require("../models/ProductModels");

const productRoute = express.Router();

productRoute.get(
  "/",
  expressasynchandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

productRoute.get(
  "/seed",
  expressasynchandler(async (req, res) => {
    const createdProducts = await Product.insertMany(data.products)
    res.send({ createdProducts });
  })
);

productRoute.get("/:id", expressasynchandler(async(req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Product Not Found");
  }
}));

module.exports = productRoute;
