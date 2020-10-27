const mongoose = require('mongoose');

const officeregistrationSchema = new mongoose.Schema({
    names: String,
    ward: String,
    dateBirth: String,
    farmerOneNumber: String,
    phoneNumber: String,
    nin: String,
    activities: String,
    residence: String,
    periodSpentInWard: String,
  });

module.exports = mongoose.model('Officeregistration', officeregistrationSchema); 