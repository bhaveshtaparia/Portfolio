const mongoose=require('mongoose');
const dbconnect=()=>{
    mongoose.connect("mongodb://localhost:27017/Portfolio").then(()=>{
        console.log("database connection was successfully created");
    })
}
module.exports=dbconnect;