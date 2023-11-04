const express = require("express");
const mongoose = require('mongoose');


const roomSchema = new mongoose.Schema({
    roomNumber: { type: String, unique: true }, // Room number
    type: { type: String, enum: ['4-sharing', '5-sharing', '6-sharing', '7-sharing'] }, // Room type
    totalBeds: { type: Number, default: 5 }, // Total number of beds in the room
    occupiedBeds: { type: Number, default: 0 }, // Number of beds occupied in the room
    beds: [{
      aadhar_number: String, // Aadhar number
      name: String, // Name of the occupant
    }],
  }, { timestamps: true });
  
  // Create an index on the room number for faster retrieval
 
  const Room = mongoose.model('Room', roomSchema);

  let roomNumberCounter = 200; // Global counter for room numbers

  const initializeRooms = async () => {
    const roomConfigurations = [
      { type: '4-sharing', totalBeds: 5 , numberOfRooms: 5 },
      { type: '5-sharing', totalBeds: 5 , numberOfRooms: 5 },
      { type: '6-sharing', totalBeds: 5 , numberOfRooms: 5 },
      { type: '7-sharing', totalBeds: 5 , numberOfRooms: 5 },
    ];
    for (const config of roomConfigurations ) { 
      for (let i = 1; i <= config.numberOfRooms; i++) {
        const room = new Room({
          roomNumber:roomNumberCounter,
          type: config.type,
          totalBeds: config.totalBeds,
          occupiedBeds: config.occupants,
          beds: Array.from({ length: config.totalBeds }, () => ({
            aadhar_number: '', // Initialize Aadhar number
            name: '', // Initialize name
          })),
        });
  
        await room.save();
        roomNumberCounter++;
      }
    }
  };
  
  
   


  
  module.exports=Room;