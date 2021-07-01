const express = require("express");
const app = express();
const dotenv = require("dotenv");
const productRoute = require("./routers/productRouter");
const userRouter = require("./routers/userRouter");
const orderRoute = require("./routers/orderRouter");
require("./db/conn");

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products/", productRoute);
app.use("/api/user/", userRouter);
app.use("/api/order/", orderRoute);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(process.env.PORT, () => {
  console.log(`server is runninng at port ${process.env.PORT}`);
});
