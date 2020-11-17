const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
  
const AdminsignUp=require('../model/adminSignUpmodel')


//Agric Officer registration
router.get('/adminsignup', (req, res) => {
    res.render('adminSignUp')
  })
  
  // router.post('/agricOfficerSignUpForm', async (req, res) => {
  //   const agricofficersignupmodel = new Agricofficersignup(req.body);
  //   try {
  //     await agricofficersignupmodel.save()
  //     res.redirect('/agricsignin/agricsignin')
  // } catch (err) {
  //     res.send('Sorry! Something went wrong.');
  //     console.log(err);
  // }
  // })

  router.post("/adminsignup", async (req, res) => {
    try {
      const items = new AdminsignUp(req.body);
      await AdminsignUp.register(items, req.body.password, (err) => {
        if (err) { throw err }
        res.redirect('/adminsignin/adminsignin')
      })
    } catch (err) {
       res.status(400).send('Sorry! Something went wrong.')
       console.log(err)
    }
  })
                                                            
module.exports=router;