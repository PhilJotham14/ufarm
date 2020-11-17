const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
  
const Wardoauthsignups=require('../model/wardOAuthSignUpFormmodel')

//Farmer One/Ward One registration
router.get('/', (req, res) => {
    res.render('wardOAuthSignUpForm')
  })
  
  // router.post('/wardOAuthSignUpForm', async (req, res) => {
  //   const wardoauthsignupmodel = new Wardoauthsignups(req.body);
  //   try {
  //     await wardoauthsignupmodel.save()
  //     res.redirect('/wardOAuthSignInForm/wardOAuthSignInForm')
  // } catch (err) {
  //     res.send('Sorry! Something went wrong.');
  //     console.log(err);
  // }
  // })

  router.post("/wardOAuthSignUpForm", async (req, res) => {
    try {
      const items = new Wardoauthsignups(req.body);
      await Wardoauthsignups.register(items, req.body.password, (err) => {
        if (err) { throw err }
        res.redirect('/wardOAuthSignInForm/wardOAuthSignInForm')
      })
    } catch (err) {
       res.status(400).send('Sorry! Something went wrong.')
       console.log(err)
    }
  })
  

module.exports=router;