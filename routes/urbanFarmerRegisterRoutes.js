const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();


const Urbanfarmerregisteration=require('../model/urbanFarmerregisterationmodel')

//Urban Farmer registration
router.get('/', (req, res) => {
    res.render('urbanFarmerregisteration')
  })
  
router.post('/urbanFarmerRegister', async (req, res) => {
    const urbanFarmerregisteration = new Urbanfarmerregisteration(req.body);
    try {
      await urbanFarmerregisteration.save()
      res.redirect('/urbanFarmerRegister')
  } catch (err) {
      res.send('Sorry! Something went wrong.');
      console.log(err);
  }
  })

module.exports=router;