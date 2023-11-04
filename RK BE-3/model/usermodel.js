const express = require("express");
const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
const jwt= require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    userName: {
      type: String,
      required: true
    },
    userPassword: {
      type: String,
      required: true
    },
    tokens:[
      {
        token:{
          type: String,
      required: true
        }
      }
    ]

     

  
     
  });
  userSchema.pre("save", async function(next){
   if(this.isModified('userPassword')) {this.userPassword= await bcrypt.hash(this.userPassword,12);
    next();}
     

  });

  userSchema.methods.generateAuthToken= async function () {
    try{
      let token=jwt.sign({_id:this._id},"mynameispariksthithfromjagtiyal",{expiresIn:'3minutes'});
      this.tokens=this.tokens.concat({token:token});
      await this.save();
      return token;

    }catch(error){console.log(error)}
  }
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;