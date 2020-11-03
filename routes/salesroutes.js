const express=require('express');
const router=express.Router();

const Addproduct=require('../model/addproductmodel');
//displays the sales page
// router.get('/', (req,res) => {
//     res.render('sales')
// })

router.get('/', async (req, res) => {
    try {
        let items = await Addproduct.find()
        if (req.query.ward) {
          items = await Addproduct.find({ category: req.query.ward })
        }
      //addproductform is for the PUG file.
      res.render('sales', { products: items })
    } catch (err) {
      res.status(400).send("unable to find items in the database");
    }
  })

module.exports=router;