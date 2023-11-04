const express = require("express");
const mongoose = require('mongoose');
const Room=require('../model/roommodel')



const feePaidSchema = new mongoose.Schema({
  due_date: {
    type: Date,
    required: true
  },
  paid_date: {
    type: Date,
    required: true
  },
  amount_paid: {
    type: String,
    required: false
  },
  collected_by: {
    type: String,
    required: false
  }
});


const guestSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    mobile_number: {
      type: String,
      required: true
    }, 
    father_name: {
      type: String,
      required: true
    },
    father_number: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    room_number: {
      type: String,
      required: true
    },
    purpose_of_stay: {
      type: String,
      required: true
    },
    institution_name: {
      type: String,
      required: true
    },
    adhaar_number: {
      type: String,
      required: true
    }, 
    joining_date: {  
      type: Date,
      required: true
    }, 
    relieving_date: {
      type: Date,
      required: false // Change to "true" if relieving_date is required
    },
    fee_payment_dates: {
      type: [Date],
      required: true // Change to "true" if fee_payment_dates is required
    }
    ,
  fee_paid_details: {
    type: [feePaidSchema], // Define the array of fee_paid_details
    required: false // Change to "true" if fee_paid_details is required
  },

   

  });




 



  
  const Guest = mongoose.model('Guest', guestSchema);
  
  module.exports = Guest;