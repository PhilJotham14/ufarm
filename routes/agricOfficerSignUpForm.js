const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
  
const Agricofficersignup=require('../model/agricOfficerSignUpmodel')

//Agric Officer registration
router.get('/agricOfficerSignUpForm', (req, res) => {
    res.render('agricOfficerSignUpForm')
  })
  
  router.post('/agricOfficerSignUpForm', async (req, res) => {
    const agricofficersignupmodel = new Agricofficersignup(req.body);
    try {
      await agricofficersignupmodel.save()
      res.redirect('/agricOfficerDashboard')
  } catch (err) {
      res.send('Sorry! Something went wrong.');
      console.log(err);
  }
  })
                                                            
module.exports=router;