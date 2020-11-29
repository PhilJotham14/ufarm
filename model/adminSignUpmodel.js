const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const adminSignUpsSchema = new mongoose.Schema({
    username:{
      type: String,
      unique: true},
    email: String,
    // password: String,
});
adminSignUpsSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('AdminsignUp', adminSignUpsSchema );