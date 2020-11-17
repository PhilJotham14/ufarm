const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
  
const Agricofficersignup=require('../model/agricOfficerSignUpmodel')
// const Officeregistration=require('../model/officeregistrationmodel')

//Agric Officer registration
router.get('/', (req, res) => {
    res.render('agricOfficerSignUpForm')
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

  router.post("/agricOfficerSignUpForm", async (req, res) => {
    try {
      const items = new Agricofficersignup(req.body);
      await Agricofficersignup.register(items, req.body.password, (err) => {
        if (err) { throw err }
        res.redirect('/agricsignin/agricsignin')
      })
    } catch (err) {
       res.status(400).send('Sorry! Something went wrong.')
       console.log(err)
    }
  })
  
  // router.get('/agricOfficerSignUpForm', async (req, res) => {
  //   if (req.session.user) {
        
  //     try {
  //         let items = await Officeregistration.find()
  //         if (req.query.gender) {
  //           items = await Officeregistration.find({ gender: req.query.gender })
  //         }
  //         res.render('list', { users: items, currentUser: req.session.user})
  //       } catch (err) {
  //         res.status(400).send("unable to find items in the database");
  //       }
  
  //     } else {
  //       console.log("cant find session")
  //       res.redirect('/login')
  //   }
  //   })
                                                            
module.exports=router;