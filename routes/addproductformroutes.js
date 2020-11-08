const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const multer = require('multer');

var view = "./views/"
const Addproduct=require('../model/addproductmodel');
const { urlencoded } = require('body-parser');

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




//Add product
router.get('/', (req, res) => {
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
      description: req.body.description,
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


  // router.post('/update', async (req, res, next) => {
  //   try {
  //     await Addproduct.updateOne ({"_id": objectId(id)}, {$set: item},({
  //       names: req.body.names,
  //       ward: req.body.ward,
  //       date: req.body.date,
  //       price: req.body.price,
  //       quantity: req.body.quantity,
  //       product: req.body.product,
  //       payment: req.body.payment,
  //       uploadimage: req.file.path,
  //       delivery: req.body.delivery,
  //       directions: req.body.directions,
  //      })
  //     // res.redirect('back')
  //     )} catch (error) {
  //      res.status(400).send("unable to update to database");
  //   }
  // })

  // router.put('/update', function(req, res){
  //   console.log('Update');
  //   Names.findByIdAndUpdate(req.params.id),
  //   {
      
  //   }
  //   // ward: req.body.ward,
  //   // date: req.body.date,
  //   // price: req.body.price,
  //   // quantity: req.body.quantity,
  //   // product: req.body.product,
  //   // payment: req.body.payment,
  //   // uploadimage: req.file.path,
  //   // delivery: req.body.delivery,
  //   // directions: req.body.directions,
  // })

  router.post("/delete", async (req, res) => {
    try {
      await Addproduct.deleteOne({_id: req.body.id })
      res.redirect('back')
    } catch (error) {
       res.status(400).send("unable to delete to database");
    }
  })

  //just added for testing
  //   //__________ view single purchase
  // router.get('/addproduct/:id', (req,res)=>{
  //   Addproduct.findById(req.params.id, (error, purchase) =>{
  //     res.render('addproductFormdup',{//create this view
  //       products:products
  //     })
  //   })
  // }) 



  router.get('/addproduct/:id', upload.single('uploadimage'), async (req, res) => {
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
        description: req.body.description,
    });
    try {
      await addproductmodel.update()
      // res.send('Thank you for your registration!');
      console.log(req.body);
      res.redirect('/addproduct/update/')
  } catch (err) {
      res.send('Sorry! Something went wrong.');
      console.log(err);
  }
  })

  // Updating Products routes
  router.get('/edit/:id', (req,res)=>{
    Addproduct.findById(req.params.id, (errror, products) =>{
      res.render('addproductFormdup',{
        products:products
      })
    })
  })

  // ___________ update add product
  router.post('/addproduct/:id', async (req, res) =>{ 
    let query ={_id:req.params.id}
      try{
        await Addproduct.update(query, req.body)
        res.redirect('/addproduct/addproductform')
      }catch (err) {
        res.send("Sorry! Something went wrong.");
        console.log(err)
      }
  })
  // router.get('/edit/:id', (req,res)=>{
  //   AdminRegistration.findById(req.params.id, (errror, agent) =>{
  //     res.render('admins/edit_agent',{
  //       agent:agent
  //     })
  //   })
  // })

  module.exports=router;