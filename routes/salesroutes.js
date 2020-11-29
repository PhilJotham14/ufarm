const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

const multer = require('multer');

const Addproduct=require('../model/addproductmodel');
// const { urlencoded } = require('body-parser');
//displays the sales page
// router.get('/', (req,res) => {
//     res.render('sales')
// })

// // uploading image
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//       cb(null, 'uploads/')
//   },
//   filename: function (req, file, cb) {
//       cb(null, file.originalname)
//   }
// })

// const upload = multer({
//   storage: storage
// })

router.get('/', async (req, res) => {
    try {
        let items = await Addproduct.find()
        if (req.query.ward) {
          items = await Addproduct.find({ ward: req.query.ward })
        }
      //addproductform is for the PUG file.
      res.render('sales', { products: items })
    } catch (err) {
      res.status(400).send("unable to find items in the database");
    }
  })

module.exports=router;