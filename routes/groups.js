const {Group}=require('../models/group');
const express=require('express');
const router= express.Router();

router.get(`/`, async(req,res)=>{
    const groupList=await Group.find();
    res.send(groupList);
})

module.exports=router;