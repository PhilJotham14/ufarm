const express=require('express');
const router=express.Router();

var view = "./views/"

router.get('/', (req, res) => {
    res.sendFile("index.html", { root: view });
  })

module.exports=router;  