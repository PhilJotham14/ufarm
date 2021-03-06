console.log('Hello, Ufarm! Node is working...')

const express = require('express');

const path = require('path');
const indexRoutes=require('./routes/indexroutes')
const aboutusRoutes=require('./routes/aboutusroutes')
const officeregistrationformRoutes=require('./routes/officeregistrationformroutes')
const registrationpugRoutes=require('./routes/officeregistrationformroutes')
const salesRoutes=require('./routes/salesroutes')
const agricOfficerDashboardRoutes=require('./routes/agricOfficerDashboardroutes')
const wardOneDashboardRoutes=require('./routes/wardOneDashboardroutes')
const urbanFarmerDashboardRoutes=require('./routes/urbanFarmerDashboardRoutes')
const agricOfficerSignUpFormRoutes=require('./routes/agricOfficerSignUpForm')
const agricOfficerSignInFormRoutes=require('./routes/agricOfficerSignInroutes')
const urbanFarmerRegisterationRoutes=require('./routes/urbanFarmerRegisterRoutes')
const wardOauthsignUpFormRoutes=require('./routes/wardOAuthSignUpFormRoutes')
const wardOauthsignInFormRoutes=require('./routes/wardOAuthSignInFormRoutes')
const addproductFormRoutes=require('./routes/addproductformroutes')
const addproductFormEditRoutes=require('./routes/addproductformroutes')
const bookinglistFormRoutes=require('./routes/bookingformroutes')
const contactUsFormRoutes=require('./routes/contactusroutes')
const adminSignUpFormRoutes=require('./routes/adminSignUproutes')
const adminSignInFormRoutes=require('./routes/adminSignInroutes')

const bodyParser= require('body-parser')

const multer = require('multer');

const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
});
const passport = require('passport');
  
//mongoose
require('dotenv').config();
const mongoose = require('mongoose');

require('./model/officeregistrationmodel');
require('./model/urbanFarmerregisterationmodel');
const Wardoauthsignups = require('./model/wardOAuthSignUpFormmodel');
const Agricofficersignup = require('./model/agricOfficerSignUpmodel');
const AdminsignUp = require('./model/adminSignUpmodel');
require('./model/addproductmodel');
require('./model/bookingformmodel');
require('./model/contactUsmodel');



const app = express();

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

var view = "./views/"
//calling html file in the view folder this helps in using html if you dont want to use Pug.
// var view = "./views/";
  
app.set('view engine', 'pug')
app.set('views', './views');

//Setting up the view engine Pug but you are not using it in your project.
// app.set('view engine', 'pug');
// app.set('views', './views')

app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended: true}))

app.use(expressSession);

app.use(express.static(path.join(__dirname, "public")));
app.use('/sales', express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//Passport configs.
app.use(passport.initialize());
app.use(passport.session());

//Urban Farmer Passport configs
passport.use(Wardoauthsignups.createStrategy());
passport.serializeUser(Wardoauthsignups.serializeUser());
passport.deserializeUser(Wardoauthsignups.deserializeUser());

//Ward One/Farmer One Passport Configs
passport.use(Agricofficersignup.createStrategy());
passport.serializeUser(Agricofficersignup.serializeUser());
passport.deserializeUser(Agricofficersignup.deserializeUser());

//Admin (AgricOfficer Portal)Passport Configs
passport.use(AdminsignUp.createStrategy());
passport.serializeUser(AdminsignUp.serializeUser());
passport.deserializeUser(AdminsignUp.deserializeUser());

//Registering use of middleware.
app.use('/',indexRoutes);
app.use('/aboutus',aboutusRoutes);
app.use('/officeregistration',officeregistrationformRoutes);
app.use('/register',registrationpugRoutes);
app.use('/sales',salesRoutes);
app.use('/agricOfficerDashboard',agricOfficerDashboardRoutes);
app.use('/agricOfficerSignUpForm',agricOfficerSignUpFormRoutes);
app.use('/agricsignin',agricOfficerSignInFormRoutes);
app.use('/wardOneDashboard',wardOneDashboardRoutes);
// app.use('/wardTwoDashboard',agricOfficerDashboardRoutes);
// app.use('/wardThreeDashboard',agricOfficerDashboardRoutes);
// app.use('/wardFourDashboard',agricOfficerDashboardRoutes);
app.use('/urbanFarmerDashboard',urbanFarmerDashboardRoutes);
app.use('/urbanFarmerRegister',urbanFarmerRegisterationRoutes);
app.use('/wardOAuthSignUpForm',wardOauthsignUpFormRoutes);
app.use('/wardOAuthSignInForm',wardOauthsignInFormRoutes);
app.use('/addproduct',addproductFormRoutes);
app.use('/addproduct/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/booking',bookinglistFormRoutes);
app.use('/addproduct/update/',addproductFormEditRoutes);
app.use('/contact',contactUsFormRoutes);
app.use('/adminsignup',adminSignUpFormRoutes);
app.use('/adminsignin', adminSignInFormRoutes);
app.use('/logout',agricOfficerDashboardRoutes);

//When a wrong path is accessed.
app.get('*', (req, res) => {
    res.send('ERROR')
})
  
// Listening for requests: the server!
app.listen(3000, () => {
    console.log(`Express running → PORT 3000`);
});