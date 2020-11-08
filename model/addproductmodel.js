const mongoose = require('mongoose');

const addproductsSchema = new mongoose.Schema({
    names: String,
    ward: String,
    date: String,
    price: String,
    quantity: String,
    product: String,
    payment: String,
    uploadimage: String,
    delivery: String,
    directions: String,
    description: String,
  });
module.exports = mongoose.model('Addproduct', addproductsSchema); 