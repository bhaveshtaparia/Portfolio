const mongoose=require('mongoose');
const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    }
});
module.exports=new mongoose.model('contact',contactSchema);
