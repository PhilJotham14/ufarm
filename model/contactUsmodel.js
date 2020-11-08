const mongoose = require('mongoose');

const contactsSchema = new mongoose.Schema({
    email: String,
    subject: String,
    message: String,
  });
module.exports = mongoose.model('Contactu', contactsSchema); 