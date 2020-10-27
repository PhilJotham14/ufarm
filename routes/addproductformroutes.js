const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const multer = require('multer');


// var view = "./views/"
const Addproduct=require('../model/addproductmodel')

// uploading image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname)
  }
})

const upload = multer({
  storage: storage
})




//registration
router.get('/addproduct', (req, res) => {
    // res.sendFile(__dirname + '/registration_form.html')
    res.render('addproductForm')
  })

  router.post('/addproduct', upload.single('uploadimage'), async (req, res) => {
    //outputs the form values in the console
    console.log(req.body);
    console.log(req.file);
    // res.redirect('/');
    const addproductmodel = new Addproduct({
      names: req.body.names,
      ward: req.body.ward,
      date: req.body.date,
      price: req.body.price,
      quantity: req.body.quantity,
      product: req.body.product,
      payment: req.body.payment,
      uploadimage: req.file.path,
      delivery: req.body.delivery,
      directions: req.body.directions,
    });
    try {
      await addproductmodel.save()
      // res.send('Thank you for your registration!');
      console.log(req.body);
      res.redirect('/addproduct/addproductform')
  } catch (err) {
      res.send('Sorry! Something went wrong.');
      console.log(err);
  }
  })

  router.get('/addproductform', async (req, res) => {
    try {
      let items = await Addproduct.find()
      if (req.query.ward) {
        items = await Addproduct.find({ category: req.query.ward })
      }
      //addproductform is for the PUG file.
      res.render('addproductlist', { products: items })
    } catch (err) {
      res.status(400).send("unable to find items in the database");
    }
  })

  // router.post("/update", async (req, res) => {
  //   try {
  //     await Addproduct.updateOne({_id: req.body.id }),
  //     {
  //       $set: {_id: req.body.id },
  //       $currentDate: { "lastModified": true }
  //     }
  //     // res.redirect('back')
  //   } catch (error) {
  //      res.status(400).send("unable to update to database");
  //   }
  // })
  router.post("/update").put(function(req, res) {
    Addproduct.updateOne({_id: req.body.id }, function(
      err,
      result
    ) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  });
  

  
  router.post("/delete", async (req, res) => {
    try {
      await Addproduct.deleteOne({_id: req.body.id })
      res.redirect('back')
    } catch (error) {
       res.status(400).send("unable to delete to database");
    }
  })
  

  module.exports=router;