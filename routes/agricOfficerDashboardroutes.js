const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

//displays the Agriculture Officer Dashboard page
router.get('/', (req,res) => {
    res.render('agricOfficerDashboard')
})

// router.get('/', (req,res) => {
//     res.render('wardTwoDashboard')
// })

// router.get('/', (req,res) => {
//     res.render('wardThreeDashboard')
// })

// router.get('/', (req,res) => {
//     res.render('wardFourDashboard')
// })

// router.get('/', (req,res) => {
//     res.render('urbanFarmerDashboard')
// })

//logout
router.post('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(function (err) {
            if (err) {
                // failed to destroy session
            } else {
                return res.redirect('/');
            }
        })
    }  
  })
module.exports=router;