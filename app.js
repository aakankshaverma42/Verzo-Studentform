const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded({extended:true}));
const Students = require("./model/user")

//view engine setup

app.set('view engin','ejs');

app.get('/',(req,res)=>{
  res.render('index.ejs');
})
//  Db connection start
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/studentdb',{
      useNewUrlParser:true
  }).then(() => console.log('Connection successful'))
};

app.post('/',async(req,res) =>{
 const data = new Students(req.body)
  await data.save()
  res.send("Save data")
})
  
app.listen(3030,()=> console.log('Server started ata port 3030'));