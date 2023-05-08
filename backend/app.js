const express=require('express');
const dbconnect=require('./server');
const contact=require('./routes/contactR');
const app=express();
const bodyparser=require('body-parser')
app.use(express.urlencoded({extended:false}));
app.use(bodyparser.json());
const port=5000;
app.use('/api/v1',contact);
dbconnect();
app.listen(port,()=>{
console.log(`http://localhost:${port}`);
})