const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();


const Booking=require('../model/bookingformmodel')
const {emailSending}=require('./mail')

//Booking List
// router.get('/officeregistration', (req, res) => {
//     res.render('officeregistration')
//   })
  
  router.post('/booking', async (req, res) => {
    emailSending(req.body.names,  `email:${req.body.email}\n date:${req.body.date}\n product:${req.body.product}\n quantity:${req.body.quantity}\n payment:${req.body.payment}\n delivery:${req.body.delivery}\n phoneNumber:${req.body.phoneNumber}\n directions:${req.body.directions}`)
    const bookingformmodel = new Booking(req.body);
    try {
      await bookingformmodel.save()
      // res.send('Thank you for your registration!');
      res.redirect('/sales')
  } catch (err) {
      res.send('Sorry! Something went wrong.');
      console.log(err);
  }
  })
  
router.get('/orderlist', async (req, res) => {
  try {
    let items = await Booking.find()
    if (req.query.email) {
      items = await Booking.find({ email: req.query.email })
    }
    res.render('bookinglist', { orders: items })
  } catch (err) {
    res.status(400).send("unable to find items in the database");
  }
})

router.post("/delete", async (req, res) => {
  try {
    await Booking.deleteOne({_id: req.body.id })
    res.redirect('back')
  } catch (error) {
     res.status(400).send("unable to delete to database");
  }
})

module.exports=router;
