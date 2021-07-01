const express = require("express");
const expressasynchandler = require("express-async-handler");
const Order = require("../models/OrderModel");
const isAuth = require("../util");

const orderRoute = express.Router();

orderRoute.post(
  "/",
  isAuth,
  expressasynchandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: "Cart is empty" });
    } else {
      order = await new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemPrice: req.body.itemPrice,
        shippingCharg: req.body.shippingCharg,
        texPrice: req.body.texPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
      });
      const createObject = await order.save();
      res
        .status(201)
        .send({ message: "New Order Created", order: createObject });
    }
  })
);

module.exports = orderRoute;