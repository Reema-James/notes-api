const {Group}=require('../models/group');
const express=require('express');
const router= express.Router();

router.get(`/`, async(req,res)=>{
    res.send({
        "name" : "tuty"
    });
})

module.exports=router;