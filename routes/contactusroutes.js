const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

var view = "./views/"

const Contactu=require('../model/contactUsmodel')
const {emailSending}=require('./mail')

// //Booking List
// router.get('/contact', (req, res) => {
//     res.sendFile("aboutus.html", { root: view });
//   })
  
  router.post('/', async (req, res) => {
    emailSending(req.body.email,  `subject:${req.body.subject}\n message:${req.body.message}`)
    const contactusformmodel = new Contactu(req.body);
    try {
      await contactusformmodel.save()
      // res.send('Thank you for your registration!');
      res.redirect('/aboutus')
  } catch (err) {
      res.send('Sorry! Something went wrong.');
      console.log(err);
  }
  })

module.exports=router;