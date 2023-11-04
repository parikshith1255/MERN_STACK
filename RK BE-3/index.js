const express = require("express");
const app = express();
const cors = require("cors");
 const bodyParser= require( "body-parser");
const path=require("path");
const mongodb=require('./Routes/mdb');
const mongoose = require('mongoose');
const { error } = require("console");
app.use(cors());
app.use(express.urlencoded({extended:true
})); 

app.use(express.json());


const mdburl='mongodb+srv://RK:RK@cluster0.eckmais.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mdburl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
     const db=mongoose.connection
     db.on("error",(err)=>{
      console.log(err)  

     })
  
     db.once("open",( )=>{
      console.log("database connection Established")

     })
  

     app.use('/profile', express.static('uploads/'));

     app.use((req,res,next)=>{
      console.log("middleware ")
      return next();
  })
app.use("/mdb",mongodb); 



const start= async()=>{
    try{ 
      app.listen(4044,()=>{
        console.log("server running")
      })
  
  
  
    }catch(error){
      console.log(error)
    }
  }
  start()