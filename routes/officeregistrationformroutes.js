const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();


const Officeregistration=require('../model/officeregistrationmodel')

//Office registration
router.get('/', (req, res) => {
    res.render('officeregistration')
  })
  
  router.post('/officeregistration', async (req, res) => {
    const officeregistrationmodel = new Officeregistration(req.body);
    try {
      await officeregistrationmodel.save()
      // res.send('Thank you for your registration!');
      res.redirect('/register/userlist')
  } catch (err) {
      res.send('Sorry! Something went wrong.');
      console.log(err);
  }
  })
  
router.get('/userlist', async (req, res) => {
  try {
    let items = await Officeregistration.find()
    if (req.query.farmerOneNumber) {
      items = await Officeregistration.find({ farmerOneNumber: req.query.farmerOneNumber })
    }
    res.render('list', { users: items })
  } catch (err) {
    res.status(400).send("unable to find items in the database");
  }
})

router.post("/delete", async (req, res) => {
  try {
    await Officeregistration.deleteOne({_id: req.body.id })
    res.redirect('back')
  } catch (error) {
     res.status(400).send("unable to delete to database");
  }
})

//logout
router.post('/logout', (req, res) => {
  if (req.session) {
      req.session.destroy(function (err) {
          if (err) {
              // failed to destroy session
          } else {
              return res.redirect('/login');
          }
      })
  }  
})
module.exports=router;
