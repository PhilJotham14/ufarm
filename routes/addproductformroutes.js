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
        items = await Addproduct.find({ ward: req.query.ward })
      }
      //addproductform is for the PUG file.
      res.render('addproductlist', { products: items })
    } catch (err) {
      res.status(400).send("unable to find items in the database");
    }
  })

  router.post("/delete", async (req, res) => {
    try {
      await Addproduct.deleteOne({_id: req.body.id })
      res.redirect('back')
    } catch (error) {
       res.status(400).send("unable to delete to database");
    }
  })

  // Updating Products routes (This method worked on getting but changed due to the get not functioning as expected)
  // router.get('/edit/:id', (req,res)=>{
  //   Addproduct.findById(req.params.id, (errror, products) =>{
  //     res.render('addproductFormdup', { products: products })
  //   })
  // })

  //  Product update route which takes you from the update button to updateProductlist.pug page 
// which allows the user to update the product details
router.get('/edit/:id', async (req, res) => {
  try {
      let items = await Addproduct.find({
          _id: req.params.id
      })
      res.render('addproductFormdup', {
        products: items
      })
  } catch (error) {
      console.log(error)
      res.status(400).send("Unable to update")
  }
})

  // // ___________ update add product
  // router.post('/addproduct/:id', async (req, res) =>{ 
  //   let query ={_id:req.params.id}
  //     try{
  //       await Addproduct.update(query, req.body)
  //       res.redirect('/addproduct/addproductform')
  //     }catch (err) {
  //       res.send("Sorry! Something went wrong.");
  //       console.log(err)
  //     }
  // })

// Updating a single product including the product photo
router.post('/update/:id', upload.single('uploadimage'), async (req, res) => {
  try {
      await Addproduct.updateOne({
          _id: req.params.id
      }, {
              $set: 
              {
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
                description: req.body.description
              }
          })
      console.log(req.body)
      res.redirect("/addproduct/addproductform")
  } catch (error) {
      console.log(error)
      res.status(400).send("Unable to update")
  }
})

module.exports=router;