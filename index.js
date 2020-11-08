console.log('Hello, World! Node is working...')

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

const bodyParser= require('body-parser')

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
require('./model/agricOfficerSignUpmodel');
require('./model/wardOAuthSignUpFormmodel');
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

//Passport configs.
app.use(passport.initialize());
app.use(passport.session());

// Registration Passport configs
// passport.use(Registration.createStrategy());
// passport.serializeUser(Registration.serializeUser());
// passport.deserializeUser(Registration.deserializeUser());

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
app.use('/wardTwoDashboard',agricOfficerDashboardRoutes);
app.use('/wardThreeDashboard',agricOfficerDashboardRoutes);
app.use('/wardFourDashboard',agricOfficerDashboardRoutes);
app.use('/urbanFarmerDashboard',urbanFarmerDashboardRoutes);
app.use('/urbanFarmerRegister',urbanFarmerRegisterationRoutes);
app.use('/wardOAuthSignUpForm',wardOauthsignUpFormRoutes);
app.use('/wardOAuthSignInForm',wardOauthsignInFormRoutes);
app.use('/addproduct',addproductFormRoutes);
app.use('/addproduct/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/booking',bookinglistFormRoutes);
app.use('/addproduct/update/',addproductFormEditRoutes);
app.use('/contact',contactUsFormRoutes);

//When a wrong path is accessed.
app.get('*', (req, res) => {
    res.send('ERROR')
})
  
// Listening for requests: the server!
app.listen(3000, () => {
    console.log(`Express running → PORT 3000`);
});