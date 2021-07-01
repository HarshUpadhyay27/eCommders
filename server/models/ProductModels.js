const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    require:true
  },
  image: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  descripition: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
  numReviews: {
    type: Number,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  countInStock: {
    type: Number,
    require: true,
  },
});

const Product = mongoose.model('Product', productSchema)
module.exports = Product