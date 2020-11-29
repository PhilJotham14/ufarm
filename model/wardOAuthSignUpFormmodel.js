const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const wardOAuthSignUpsSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true},
    email: String,
});
wardOAuthSignUpsSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Wardoauthsignups', wardOAuthSignUpsSchema);