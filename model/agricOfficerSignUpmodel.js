const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const agricOfficerSignUpsSchema = new mongoose.Schema({
    username:{
      type: String,
      unique: true},
    email: String,
});
agricOfficerSignUpsSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Agricofficersignup', agricOfficerSignUpsSchema);