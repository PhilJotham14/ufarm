const mongoose = require('mongoose');

const urbanFarmerregisterationSchema = new mongoose.Schema({
    names: String,
    ward: String,
    dateBirth: String,
    farmerOneNumber: String,
    phoneNumber: String,
    nin: String,
    activities: String,
    gender: String,
    dateRegisteration: String,
  });

module.exports = mongoose.model('Urbanfarmerregisteration', urbanFarmerregisterationSchema); 