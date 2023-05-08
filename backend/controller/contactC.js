const Contact=require('../model/contactModel');
exports.createContact=async(req,res)=>{
try{
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