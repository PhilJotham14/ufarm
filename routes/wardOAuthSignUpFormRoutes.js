const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
  
const Wardoauthsignups=require('../model/wardOAuthSignUpFormmodel')

//Farmer One/Ward One registration
router.get('/wardOAuthSignUpForm', (req, res) => {
    res.render('wardOAuthSignUpForm')
  })
  
  router.post('/wardOAuthSignUpForm', async (req, res) => {
    const wardoauthsignupmodel = new Wardoauthsignups(req.body);
    try {
      await wardoauthsignupmodel.save()
      res.redirect('/wardOAuthSignUpForm/wardOAuthSignUpForm')
  } catch (err) {
      res.send('Sorry! Something went wrong.');
      console.log(err);
  }
  })

module.exports=router;