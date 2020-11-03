const mongoose = require('mongoose');

const bookingsSchema = new mongoose.Schema({
    names: String,
    email: String,
    date: String,
    product: String,
    quantity: String,
    payment: String,
    delivery: String,
    phoneNumber: String,
    directions: String,
  });
module.exports = mongoose.model('Booking', bookingsSchema); 