const express = require("express");
const router= express.Router();

const guestcontroller=require("../Controller/guestcontroller")
const usercontroller=require('../Controller/usercontroller')
const roomcontroller=require('../Controller/roomscontroller')
router.get("/index",guestcontroller.index)
router.post("/show",guestcontroller.show)
router.post("/update",guestcontroller.update)
router.post("/addguest",guestcontroller.addguest)
router.post("/destroy",guestcontroller.destroy)
router.post("/payfees",guestcontroller.payfees)
router.post("/createUser",usercontroller.createUser)
router.post("/loginAuth",usercontroller.loginAuth)
router.post("/testing",usercontroller.uploadFile)
router.post("/roomlist",roomcontroller.roomlist)










module.exports=router;