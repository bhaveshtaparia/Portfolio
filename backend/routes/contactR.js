const express=require('express');
const router=express.Router();
// const createContact=require('../controller/contactC');
const Contact=require('../model/contactModel');
const createContact=async(req,res)=>{
    try{
        console.log(req.body);
    const contact=await Contact.create(req.body);
    res.status(201).json({
        success:true,
        contact
    })
    }catch(err){
    res.status(500).json({
        success:false,
        err
    })
    }
}
router.route('/contact/create').post(createContact);
module.exports=router;