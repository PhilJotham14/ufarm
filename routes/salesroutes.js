const express=require('express');
const router=express.Router();


//displays the sales page
router.get('/', (req,res) => {
    res.render('sales')
})

module.exports=router;